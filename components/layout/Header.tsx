import Link from 'next/link';

import { SmallLogo } from '@/components/Logo';
import ThemeChanger from '@/components/ThemeChanger';

export default function Header() {
  return (
    <div className='navbar sticky top-0 z-50 border-b border-b-neutral/10 bg-white/10 p-4 backdrop-blur-md'>
      <div className='flex w-full justify-between'>
        <Link className='btn-ghost btn normal-case' href='/'>
          <SmallLogo />
          <div className='divider divider-horizontal hidden md:flex' />
          <span className='hidden md:inline'>Jeffrey Hugh</span>
        </Link>
        <ThemeChanger />
      </div>
    </div>
  );
}
