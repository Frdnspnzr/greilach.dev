import { PropsWithChildren } from "react";
import styles from "./tag.module.css";

const Tag: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
