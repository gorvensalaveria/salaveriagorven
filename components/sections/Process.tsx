// app/components/sections/Process.tsx

const steps = [
  {
    title: "Initial consultation and project scoping",
    description:
      "We clarify your goals, target users, and constraints, then define the scope, success metrics, and priorities for the project.",
  },
  {
    title: "Technical design and architecture planning",
    description:
      "I design the system architecture, choose the right tools, and plan the data flow, integrations, and deployment approach.",
  },
  {
    title: "Development and iterative testing",
    description:
      "Features are built in small, testable chunks with regular feedback loops, ensuring quality and the flexibility to adjust.",
  },
  {
    title: "Launch, monitoring, and continuous improvement",
    description:
      "After launch, I monitor performance, fix edge cases, and ship refinements based on real user behavior and analytics.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-900 text-white border-t border-white/5 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-brand-blue uppercase">
            Process
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            Transforming ideas into functional digital solutions
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-300">
            A simple, repeatable process that keeps projects transparent, on
            track, and focused on delivering real value at each step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 flex flex-col gap-3"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold">
                {index + 1}
              </span>
              <h3 className="mt-2 text-sm md:text-base font-semibold">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
