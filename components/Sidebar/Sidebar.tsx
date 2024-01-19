import React from "react";

import styles from "./sidebar.module.css";

export function SidebarContainer({ children }: React.PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}

export default function Sidebar({ children }: React.PropsWithChildren) {
  return <div className={styles.sidebar}>{children}</div>;
}

export function SidebarContent({ children }: React.PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}
