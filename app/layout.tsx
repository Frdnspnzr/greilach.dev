import classNames from "classnames";
import type { Metadata } from "next";
import { Josefin_Slab, Lora } from "next/font/google";
import "./theme/theme.scss";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(lora.variable, josefinSlab.variable)}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "greilach.dev",
};
