export default function Header() {
  return (
    <header className="bg-white-900 --color-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="font-heading text-lg">Gorven G. Salaveria</div>
        <nav className="hidden md:flex gap-6 text-sm px-0.1 py-0.1 items-center">
          <a href="#hero" className="hover:opacity-80">
            Hero
          </a>
          <a href="#skills" className="hover:opacity-80">
            Skills
          </a>
          <a href="#clients-projects" className="hover:opacity-80">
            Clients Projects
          </a>
          <a href="#personal-project" className="hover:opacity-80">
            Personal Project
          </a>
          <a href="#process" className="hover:opacity-80">
            Process
          </a>
          <a href="#testimonials" className="hover:opacity-80 ">
            Testimonials
          </a>
          <a
            href="#contact-me"
            className="rounded-full bg-slate-900 px-3 py-3 text-white hover:bg-slate-700 hover:text-white transition duration-200"
          >
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
}
