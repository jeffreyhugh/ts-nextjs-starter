import A from '@/components/links/A';
import { SmallLogo } from '@/components/Logo';

export default function Header() {
  return (
    <div className='navbar glass fixed top-0 bg-base-100 p-4'>
      <div className='flex w-full justify-center md:justify-start'>
        <A className='btn btn-ghost normal-case' href='/'>
          <SmallLogo />
          <div className='divider divider-horizontal hidden md:flex' />
          <span className='hidden md:inline'>Jeffrey Hugh</span>
        </A>
      </div>
    </div>
  );
}
