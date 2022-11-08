import { ReactNode } from 'react';
import { TbLink } from 'react-icons/tb';

function getAnchor(child: ReactNode): string {
  if (!child) {
    return '';
  } else if (typeof child === 'object') {
    if ('props' in child) {
      return getAnchor(child.props.children);
    } else {
      return '';
    }
  } else {
    return (
      child
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-') || ''
    );
  }
}

export const H1 = ({ children }: { children?: ReactNode }) => {
  const anchor = getAnchor(children);

  return (
    <h1 id={anchor} className='group relative scroll-mt-20'>
      <a
        href={`#${anchor}`}
        className='absolute bottom-1/4 hidden -translate-x-6 pr-2 text-lg text-inherit group-hover:inline'
      >
        <TbLink />
      </a>
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children?: ReactNode }) => {
  const anchor = getAnchor(children);

  return (
    <h2 id={anchor} className='group relative scroll-mt-20'>
      <a
        href={`#${anchor}`}
        className='absolute bottom-1/4 hidden -translate-x-6 pr-2 text-lg text-inherit group-hover:inline'
      >
        <TbLink />
      </a>
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children?: ReactNode }) => {
  const anchor = getAnchor(children);

  return (
    <h3 id={anchor} className='group relative'>
      <a
        href={`#${anchor}`}
        className='absolute bottom-1/4 hidden -translate-x-6 pr-2 text-lg group-hover:inline'
      >
        <TbLink />
      </a>
      {children}
    </h3>
  );
};

export const H4 = ({ children }: { children?: ReactNode }) => {
  const anchor = getAnchor(children);

  return (
    <h4 id={anchor} className='group relative'>
      <a
        href={`#${anchor}`}
        className='absolute bottom-1/4 hidden -translate-x-6 pr-2 text-lg group-hover:inline'
      >
        <TbLink />
      </a>
      {children}
    </h4>
  );
};
