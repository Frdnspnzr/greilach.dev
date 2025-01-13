import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./BentoElement.module.css";

interface BentoElementProps extends PropsWithChildren {
  row?: number;
  column?: number;
  width?: number;
  height?: number;

  link?: boolean;
  bold?: boolean;
  image?: boolean;
  color?: boolean;
  center?: boolean;
  invisible?: boolean;
  title?: boolean;
}

export default function BentoElement({
  children,
  row,
  column,
  width = 1,
  height = 1,
  link = false,
  bold = false,
  image = false,
  color = false,
  center = false,
  invisible = false,
  title = false,
}: BentoElementProps) {
  return (
    <div
      className={classNames(styles.element, {
        [styles.link]: link,
        [styles.bold]: bold,
        [styles.image]: image,
        [styles.color]: color,
        [styles.center]: center,
        [styles.invisible]: invisible,
        [styles.title]: title,
        [styles.big]: width > 1 || height > 1,
      })}
      style={{
        gridRowStart: row,
        gridRowEnd: `span ${height}`,
        gridColumnStart: column,
        gridColumnEnd: `span ${width}`,
      }}
    >
      {children}
    </div>
  );
}
