import { ReactNode } from 'react';
import { FiClipboard } from 'react-icons/fi';
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
    <div className='group relative' {...rest}>
      <button
        data-tip='Copy to clipboard'
        className='btn tooltip tooltip-left btn-ghost btn-square btn-sm absolute right-1.5 top-1.5 z-10 hidden text-white group-hover:inline-flex'
        onClick={() => {
          navigator.clipboard.writeText(children?.toString() || '');
        }}
      >
        <FiClipboard className='text-xl' />
      </button>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        showLineNumbers={lineNumbers}
        wrapLongLines={true}
        className={clsxm('card', className)}
        {...rest}
      >
        {children?.toString() || ''}
      </SyntaxHighlighter>
    </div>
  );
}
