import { PropsWithChildren } from "react";
import styles from './Fancy.module.css';

export default function Fancy({ children }: PropsWithChildren) {
  return <span className={styles.fancy}>{children}</span>;
}
