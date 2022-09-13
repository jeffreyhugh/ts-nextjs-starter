import * as React from 'react';
import { themeChange } from 'theme-change';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    themeChange(false);
  }, []);

  // Put Header or Footer Here
  return (
    <div className=''>
      <Header />
      <div className='mt-10'>{children}</div>
    </div>
  );
}
