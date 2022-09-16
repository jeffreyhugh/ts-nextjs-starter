import A from '@/components/links/A';
import { SmallLogo } from '@/components/Logo';
import ThemeChanger from '@/components/ThemeChanger';

export default function Header() {
  return (
    <div className='navbar sticky top-0 border-b border-b-neutral/10 p-4 backdrop-blur-md'>
      <div className='flex w-full justify-between'>
        <A className='btn btn-ghost normal-case' href='/'>
          <SmallLogo />
          <div className='divider divider-horizontal hidden md:flex' />
          <span className='hidden md:inline'>Jeffrey Hugh</span>
        </A>
        <ThemeChanger />
      </div>
    </div>
  );
}
