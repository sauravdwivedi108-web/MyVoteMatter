import Link from 'next/link';
import { Brand } from './Brand';

export function SiteNav() {
  return (
    <header className="site-nav">
      <Brand />
      <nav aria-label="Main">
        <Link className="link hide-sm" href="/#how">How it works</Link>
        <Link className="link hide-sm" href="/security">Security</Link>
        <Link className="link" href="/login">Sign in</Link>
        <Link className="btn small" href="/signup">Start free</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="section">
        <span>© {new Date().getFullYear()} VoteSphere (working name). Pilot software, not yet independently certified.</span>
        <span><Link href="/security">Security</Link> · <Link href="/verify">Verify a receipt</Link></span>
      </div>
    </footer>
  );
}
