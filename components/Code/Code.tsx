"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Language =
  | "arduino"
  | "bash"
  | "csharp"
  | "css"
  | "dockerfile"
  | "gcode"
  | "json"
  | "javascript"
  | "markdown"
  | "powershell"
  | "python"
  | "scss"
  | "typescript"
  | "xml";

interface CodeProps {
  language?: Language;
  children: string | string[];
}

export default function Code({ language = "typescript", children }: CodeProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={monokai}
      showLineNumbers
      customStyle={{ backgroundColor: "var(--color-faint)" }}
      lineNumberStyle={{ color: "var(--color-subtle)" }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

