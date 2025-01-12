import { CSSProperties, PropsWithChildren } from "react";
import styles from "./BentoContainer.module.css";

interface BentoContainerProps extends PropsWithChildren {
  rows?: number;
  columns?: number;
}
export default function BentoContainer({
  children,
  rows = 2,
  columns = 4,
}: BentoContainerProps) {
  return (
    <div
      className={styles.container}
      style={{ "--columns": columns, "--rows": rows } as CSSProperties}
    >
      {children}
    </div>
  );
}
