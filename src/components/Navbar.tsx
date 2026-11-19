import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300 neon-border">
            ⚡
          </span>
          <div>
            <p className="text-lg font-semibold tracking-wide text-cyan-300 neon-text">NeonShop</p>
            <p className="text-xs text-slate-400">Product Explorer</p>
          </div>
        </Link>
        <Link
          to="/"
          className="rounded-md border border-fuchsia-500/40 px-3 py-1.5 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500/10 hover:text-fuchsia-200"
        >
          Products
        </Link>
      </div>
    </nav>
  );
}
