import { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { themeChange } from 'theme-change';

import clsxm from '@/lib/clsxm';
import useTheme from '@/lib/hooks/useTheme';

type ThemeChangerProps = React.ComponentPropsWithoutRef<'label'>;

export default function ThemeChanger(props: ThemeChangerProps) {
  useEffect(() => themeChange(false), []);

  const [theme, setTheme] = useTheme();

  return theme === 'light' ? (
    <label
      className={clsxm('swap swap-rotate px-6', props.className)}
      data-set-theme='dark'
      data-act-class='ACTIVECLASS'
    >
      <input type='checkbox' onChange={() => setTheme('dark')} />
      <FiSun className='swap-on h-5 w-5' />
      <FiMoon className='swap-off h-5 w-5' />
    </label>
  ) : (
    <label
      className={clsxm('swap-rotate swap px-6', props.className)}
      data-set-theme='light'
      data-act-class='ACTIVECLASS'
    >
      <input type='checkbox' onChange={() => setTheme('light')} />
      <FiSun className='swap-on h-5 w-5' />
      <FiMoon className='swap-off h-5 w-5' />
    </label>
  );
}
