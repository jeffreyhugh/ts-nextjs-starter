import { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import clsxm from '@/lib/clsxm';

export default function CodeBlock({
  className,
  language,
  children,
  lineNumbers,
  ...rest
}: {
  className?: string;
  language: string;
  children: ReactNode;
  lineNumbers?: boolean;
}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      showLineNumbers={lineNumbers}
      wrapLongLines={true}
      className={clsxm('rounded-sm', className)}
      {...rest}
    >
      {children?.toString() || ''}
    </SyntaxHighlighter>
  );
}
