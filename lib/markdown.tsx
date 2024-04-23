import Code from "@/components/Code/Code";
import ColorDefinition from "@/components/ColorDefinition/ColorDefinition";
import Example from "@/components/Example/Example";
import Group from "@/components/Group/Group";
import Tag from "@/components/Tag/Tag";
import classNames from "classnames";
import { compileMDX } from "next-mdx-remote/rsc";

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
};

export async function parseMarkdown(content: string) {
  return await compileMDX<Frontmatter>({
    source: content,
    options: { parseFrontmatter: true },
    components,
  });
}
