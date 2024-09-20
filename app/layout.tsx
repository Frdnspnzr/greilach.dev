import type { Metadata } from "next";
import "./theme/theme.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://dice.camp/@Frdnspnzr" />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "greilach.dev",
};
