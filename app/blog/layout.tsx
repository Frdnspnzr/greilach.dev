import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return children;
}

export const metadata = {
  title: {
    default: "greilach.dev/blog",
    template: "%s | greilach.dev/blog",
  },
};
