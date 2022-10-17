import A from '@/components/links/A';

export default function Footer() {
  return (
    <footer className='footer footer-center absolute bottom-0 border-t border-t-neutral/10 bg-dark-100 p-4 text-light-100'>
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
