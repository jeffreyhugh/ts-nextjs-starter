import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header />
      <div className='pt-6 pb-20'>{children}</div>
      <Footer />
    </div>
  );
}
