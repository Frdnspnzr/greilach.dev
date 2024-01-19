import { PropsWithChildren } from "react";
import styles from "./group.module.css";

export default function Group({ children }: PropsWithChildren) {
  return <div className={styles.group}>{children}</div>;
}
