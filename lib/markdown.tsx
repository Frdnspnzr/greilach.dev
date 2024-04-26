import Code from "@/components/Code/Code";
import ColorDefinition from "@/components/ColorDefinition/ColorDefinition";
import Example from "@/components/Example/Example";
import Group from "@/components/Group/Group";
import {
  Heading,
  ToCContent,
} from "@/components/TableOfContents/TableOfContents";
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

type HeadingType = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as: React.ElementType;
}

function Heading({ as, ...props }: HeadingProps) {
  const As = as;
  if (props.children && typeof props.children === "string") {
    return <As {...props} id={generateId(props.children)} />;
  } else {
    return <As {...props} />;
  }
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
  h1: (props: HeadingType) => <Heading {...props} as="h1" />,
  h2: (props: HeadingType) => <Heading {...props} as="h2" />,
  h3: (props: HeadingType) => <Heading {...props} as="h3" />,
  h4: (props: HeadingType) => <Heading {...props} as="h4" />,
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

interface Match {
  level: number;
  content: ToCContent;
  id: string;
}

export async function getAllHeadings(markdown: string): Promise<Heading[]> {
  const allMatches: Match[] = await Promise.all(
    [...markdown.matchAll(/^(\#+)(.*)$/gm)].map(async (match) => {
      const level = match[1].split("#").length - 1;
      const content = (await parseMarkdown(match[2].trim())).content;
      const id = generateId(match[2].trim());
      return {
        level,
        content,
        id,
      };
    })
  );
  return collectUntilLevelDecrease(allMatches, 0);
}

function collectUntilLevelDecrease(
  matches: Match[],
  startIndex: number
): Heading[] {
  const headings: Heading[] = [];
  let index = startIndex;
  do {
    const match = matches[index];
    const heading: Heading = {
      content: match.content,
      id: match.id,
      subheadings: [],
    };

    if (
      match.level <= 3 &&
      index + 1 < matches.length &&
      matches[index + 1].level > match.level
    ) {
      heading.subheadings = collectUntilLevelDecrease(matches, index + 1);
    }

    headings.push(heading);

    do {
      index++;
    } while (index < matches.length && matches[index].level > match.level);
  } while (
    index < matches.length &&
    matches[index].level >= matches[startIndex].level
  );
  return headings;
}
