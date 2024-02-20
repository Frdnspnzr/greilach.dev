import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1>
      greilach.dev
      <wbr />/{children}
    </h1>
  );
}
