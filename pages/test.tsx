import * as React from 'react';

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Page() {
  return (
    <Layout>
      <Seo templateTitle='test' />

      <main className='flex flex-grow'>
        <section className='flex flex-grow'>
          <div className='layout min-h-c'>
            <Breadcrumbs />
            <div className='h-128 w-128 bg-info' />
            <div className='h-128 w-128 bg-warning' />
            <div className='h-128 w-128 bg-success' />
            <div className='h-128 w-128 bg-error' />
          </div>
        </section>
      </main>
    </Layout>
  );
}
