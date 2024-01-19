import { PropsWithChildren } from "react";
import styles from "./example.module.css";

export default function Example({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <div className={styles.example}>{children}</div>
    </div>
  );
}
