import { PropsWithChildren } from "react";
import styles from "./colorDefinition.module.css";

interface ColorDefinitionProps {
  color: string;
}

export default function ColorDefinition({
  color,
  children,
}: PropsWithChildren<ColorDefinitionProps>) {
  return (
    <div className={styles.box}>
      <div className={styles.color} style={{ backgroundColor: color }} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
