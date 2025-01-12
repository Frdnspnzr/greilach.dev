import type { Metadata } from "next";
import "./theme/styles.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://dice.camp/@Frdnspnzr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "greilach.dev",
};
