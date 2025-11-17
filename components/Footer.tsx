// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: branding */}
          <div>
            <p className="text-sm font-semibold text-white">
              Gorven G. Salaveria
            </p>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Full-stack developer specialising in WordPress, Moodle LMS, and
              modern React / Next.js applications.
            </p>
          </div>

          {/* Right: quick nav */}
          <nav className="flex flex-wrap gap-4 text-xs md:text-sm">
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#personal" className="hover:text-white transition">
              Personal project
            </a>
            <a href="#process" className="hover:text-white transition">
              Process
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Gorven G. Salaveria. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <a
              href="https://github.com/gorvensalaveria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            {/* Add more socials if you want */}
            {/* <a href="https://www.linkedin.com/in/..." ...>LinkedIn</a> */}
            <span className="text-slate-500">
              Built with Next.js &amp; Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
