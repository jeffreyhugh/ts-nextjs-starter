import { MDXProvider } from '@mdx-js/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { AppProps } from 'next/app';
import { ReactNode, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { FiX } from 'react-icons/fi';

import '@/styles/globals.css';

import useTheme from '@/lib/hooks/useTheme';

import A from '@/components/links/A';
import InlineCode from '@/components/mdx/Code';

import { dark, light } from '@/constant/colors';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useTheme();

  const components = {
    code: InlineCode,
    pre: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
    a: ({
      children,
      href,
      ...rest
    }: {
      children?: ReactNode;
      href?: string;
    }) => (
      <A href={href || ''} {...rest}>
        {children}
      </A>
    ),
  };

  // !STARTERCONF consider using TypeScript for this
  // https://supabase.com/docs/reference/javascript/typescript-support
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <MDXProvider components={components}>
        <Toaster
          toastOptions={{
            style: {
              borderRadius: 'var(--rounded-btn, 0.5rem)',
              backgroundColor: 'hsl(var(--n) / 1)',
              color: 'hsl(var(--nc) / 1)',
            },
            success: {
              iconTheme: {
                primary: theme === 'light' ? light.success : dark.success,
                secondary:
                  theme === 'light' ? light['base-100'] : dark['base-100'],
              },
            },
            error: {
              iconTheme: {
                primary: theme === 'light' ? light.error : dark.error,
                secondary:
                  theme === 'light' ? light['base-100'] : dark['base-100'],
              },
            },
          }}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== 'loading' && (
                    <button
                      className='btn btn-ghost btn-circle btn-xs m-0 p-0'
                      onClick={() => toast.dismiss(t.id)}
                    >
                      <FiX />
                    </button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
        <Component {...pageProps} className='bg-base-100' />
      </MDXProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
