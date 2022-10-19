import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

type ThemeChangerProps = React.ComponentPropsWithoutRef<'label'>;

export default function ThemeChanger(props: ThemeChangerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <label
      className={clsxm(
        'swap swap-rotate px-6',
        props.className,
        isMounted ? 'visible' : 'invisible'
      )}
    >
      <input
        type='checkbox'
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        checked={theme !== 'light'}
      />
      <FiSun className='swap-on h-5 w-5' />
      <FiMoon className='swap-off h-5 w-5' />
    </label>
  );
}
