import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Page() {
  return (
    <Layout>
      <Seo templateTitle='500' />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen items-center justify-center py-20'>
            <div className='flex items-center'>
              <div className='py-8 text-lg font-bold'>500</div>
              <div className='divider divider-horizontal' />
              <div className=''>Internal Server Error</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
