import A from '@/components/links/A';

export default function Footer() {
  return (
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
  );
}
