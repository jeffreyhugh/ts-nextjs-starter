import { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({
  language,
  children,
  lineNumbers,
  ...rest
}: {
  language: string;
  children: ReactNode;
  lineNumbers?: boolean;
  className?: string;
}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      showLineNumbers={lineNumbers}
      wrapLongLines={true}
      {...rest}
    >
      {children?.toString() || ''}
    </SyntaxHighlighter>
  );
}
