import * as React from 'react';

import Layout from '@/components/layout/Layout';
import A from '@/components/links/A';
import { BigLogo } from '@/components/Logo';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <BigLogo />
            <h1 className='mt-4 text-2xl md:text-4xl'>Web Starter</h1>
            <div className='mt-4 flex max-w-md flex-wrap gap-2'>
              Next.js | TypeScript | DaisyUI | Supabase | MDX
            </div>
            <div className='mt-4 flex flex-col gap-2 md:flex-row'>
              <A className='btn' href='https://github.com/jeffreyhugh/starter'>
                Check out the repository
              </A>
              <A
                className='btn'
                href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjeffreyhugh%2Fstarter'
              >
                <div>
                  <div className='mask mask-triangle mr-2 h-4 w-4 bg-neutral-content' />
                </div>
                <p>Deploy on Vercel</p>
              </A>
            </div>

            <footer className='footer footer-center absolute bottom-0 bg-neutral p-4 text-neutral-content'>
              <div>
                <p>
                  &copy; {new Date().getFullYear()} by{' '}
                  <A className='link' href='https://jh.ms'>
                    Jeffrey Hugh
                  </A>
                </p>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
