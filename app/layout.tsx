import classNames from "classnames";
import type { Metadata } from "next";
import {
  Josefin_Slab,
  Lora,
  Victor_Mono,
  Yanone_Kaffeesatz
} from "next/font/google";
import "./theme/theme.scss";

const lora = Lora({ subsets: ["latin"], variable: "--font-body" });
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-headings",
});
const victorMono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono",
});
const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ["latin"],
  variable: "--font-metadata",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          lora.variable,
          josefinSlab.variable,
          victorMono.variable,
          yanoneKaffeesatz.variable
        )}
      >
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "greilach.dev",
};
