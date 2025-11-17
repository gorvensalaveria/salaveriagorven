import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* left side */}
        <div>
          <span className="inline-block text-sm bg-white/10 rounded-full px-3 py-1 mb-4">
            Hire
          </span>

          <h1 className="font-heading text-5xl font-bold leading-tight">
            Full-stack developer
          </h1>

          <p className="mt-4 opacity-90 max-w-prose">
            I build robust web applications that solve real problems. My code
            transforms complex challenges into elegant, functional systems
            across WordPress, React, and Moodle platforms.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              className="bg-blue-500 px-5 py-3 rounded text-white hover:bg-blue-600"
              href="https://www.dropbox.com/scl/fi/1hjyuwwblnc68b5tbgcla/Resume_Salaveria_Gorven_G.pdf?rlkey=i4z2yus7thezaneors768zj7i&st=50zq10e5&dl=0"
            >
              View Resume
            </a>
            <a
              className="border border-white/40 px-5 py-3 rounded hover:bg-white/10"
              href="#contact"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="relative w-full aspect-[5/3] md:aspect-[4/3]">
          <Image
            src="/hero-photo.webp"
            alt="Gorven G. Salaveria working on a project"
            fill
            className="
      rounded-xl 
      object-cover 
      object-[50%_20%]      /* mobile */
      md:object-[50%_20%]   /* desktop */
    "
            priority
          />
        </div>
      </div>
    </section>
  );
}
