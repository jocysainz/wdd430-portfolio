import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-xl font-bold tracking-tight">
          Jocelyne Grajeda
        </div>
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-300 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}