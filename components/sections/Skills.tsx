// app/components/sections/Skills.tsx
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white-900 text-slate-900 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        {/* Eyebrow + heading */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-blue uppercase">
            Skills
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            Crafting digital solutions with precision and power
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-900">
            I build systems that cut through complexity. My technical arsenal
            transforms abstarct challenges into concrete, functional digital
            experiences.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <article className="rounded-2xl bg-slate-900 border p-5 flex flex-col gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xl text-white">
              {/* simple icon placeholder */}
              <span>⌘</span>
            </div>
            <h3 className="text-base font-semibold text-white">
              Web foundations
            </h3>
            <p className="text-sm text-white">
              Clean, semantic HTML and CSS that create responsive, accessible
              interfaces across devices and platforms
            </p>
            <p className="mt-auto text-xs text-slate-400">
              HTML • CSS • Tailwind • Responsive design
            </p>
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl bg-slate-900 border  p-5 flex flex-col gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xl text-white">
              <span>⚙️</span>
            </div>
            <h3 className="text-base font-semibold text-white">
              Server-Side Strength
            </h3>
            <p className="text-sm text-white">
              PHP and PostgreSQL working together to build robust backend
              architectures that handle data with speed and reliability.
            </p>
            <p className="mt-auto text-xs text-slate-400">
              Node.js • Next.js API routes • REST • Auth
            </p>
          </article>

          {/* Card 3 */}
          <article className="rounded-2xl bg-slate-900 p-5 flex flex-col gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xl">
              <span>⚛️</span>
            </div>
            <h3 className="text-base font-semibold text-white">
              Modern JavaScript Ecosystems
            </h3>
            <p className="text-sm text-white">
              React and TypeScript delivering dynamic, type-safe applications
              with seamless with seamless user interactions and scalable code
              structures.
            </p>
            <p className="mt-auto text-xs text-slate-400">
              React • Next.js • TypeScript • Zustand / hooks
            </p>
          </article>

          {/* Card 4 */}
          <article className="rounded-2xl bg-slate-900 p-5 flex flex-col gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xl">
              <span>🌐</span>
            </div>
            <h3 className="text-base font-semibold text-white">
              DevOps & Infrastructure
            </h3>
            <p className="text-sm text-white">
              Docker and AWS enabling smooth deployment, while Git ensures
              version control and collaborative development workflows.
            </p>
            <p className="mt-auto text-xs text-slate-400">
              Vercel • AWS basics • Git • CI/CD
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
