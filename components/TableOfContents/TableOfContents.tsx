import Link from "next/link";
import { JSXElementConstructor, ReactElement } from "react";
import styles from "./TableOfContents.module.css";

export interface Heading {
  content: ToCContent;
  subheadings: Heading[];
  id: string;
}

export type ToCContent = ReactElement<any, string | JSXElementConstructor<any>>;

export interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <ul className={styles.list}>
      {headings.map((value, index) => {
        if (value.subheadings.length === 0) {
          return (
            <li key={index}>
              <Link href={`#${value.id}`}>{value.content}</Link>
            </li>
          );
        } else {
          return (
            <>
              <li key={index}>
                <Link href={`#${value.id}`}>{value.content}</Link>
              </li>
              <TableOfContents headings={value.subheadings} />
            </>
          );
        }
      })}
    </ul>
  );
}
