export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} | Jocelyne Grajeda | All rights reserved</p>
      </div>
    </footer>
  );
}