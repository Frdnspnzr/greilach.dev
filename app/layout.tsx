import classNames from "classnames";
import type { Metadata } from "next";
import {
  Inter_Tight,
  Josefin_Slab,
  Lora,
  Source_Code_Pro,
} from "next/font/google";
import "./theme/theme.scss";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter_tight",
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
          sourceCodePro.variable,
          interTight.variable
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
