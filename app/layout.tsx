import classNames from "classnames";
import type { Metadata } from "next";
import {
  Josefin_Slab,
  Lora,
  Source_Code_Pro,
  Yanone_Kaffeesatz,
} from "next/font/google";
import "./theme/theme.scss";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
});
const victorMono = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});
const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ["latin"],
  variable: "--font-yanone-kaffeesatz",
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
