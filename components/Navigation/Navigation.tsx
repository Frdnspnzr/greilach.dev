import { PropsWithChildren } from "react";

interface NavigationProps {
  depth?: "frontpage" | "landingpage" | "back";
}

export default function Navigation({
  depth = "back",
  children,
}: Readonly<PropsWithChildren<NavigationProps>>) {
  switch (depth) {
    case "back":
      return <>&#8701; {children}</>;
    case "landingpage":
      return <>&#8592; {children}</>;
    case "frontpage":
      return <>&#8656; {children}</>;
  }
}
