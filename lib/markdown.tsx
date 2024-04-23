import Code from "@/components/Code/Code";
import ColorDefinition from "@/components/ColorDefinition/ColorDefinition";
import Example from "@/components/Example/Example";
import Group from "@/components/Group/Group";
import Tag from "@/components/Tag/Tag";
import classNames from "classnames";
import { compileMDX } from "next-mdx-remote/rsc";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Frontmatter {
  title?: string;
  tags?: string;
  excerpt?: string;
  date?: string;
}

const components = {
  ColorDefinition,
  Group,
  Code,
  Example,
  Tag,
  code: (props: any) => {
    if (
      props.children &&
      typeof props.children === "string" &&
      !(props.children as string).includes("\n")
    ) {
      return (
        <span
          {...props}
          className={classNames(props.className, "inline-code")}
        />
      );
    } else {
      return <Code {...props} />;
    }
  },
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    if (props.children && typeof props.children === "string") {
      return <h1 {...props} id={generateId(props.children)} />;
    } else {
      return <h1 {...props} />;
    }
  },
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    if (props.children && typeof props.children === "string") {
      return <h2 {...props} id={generateId(props.children)} />;
    } else {
      return <h2 {...props} />;
    }
  },
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => {
    if (props.children && typeof props.children === "string") {
      return <h3 {...props} id={generateId(props.children)} />;
    } else {
      return <h3 {...props} />;
    }
  },
};

export async function parseMarkdown(content: string) {
  return await compileMDX<Frontmatter>({
    source: content,
    options: { parseFrontmatter: true },
    components,
  });
}

export function generateId(text: string) {
  return text
    .replace(/[^a-z0-9 ]/gi, "")
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-");
}
