// app/components/sections/Projects.tsx
import Image from "next/image";

const projects = [
  {
    slug: "ecommerce-platform",
    title: "WooCommerce E-Commerce Platform",
    description:
      "A responsive online store built with tailored product pages, dynamic course catalogues, and a streamlined checkout experience. Includes custom admin tools for updating content, processing orders, and managing learning materials efficiently.",
    tags: ["WordPress", "React", "E-commerce"],
    image: "/practicetestacademy.webp", // put file in /public/projects/
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System (Moodle LMS)",
    description:
      "A custom LMS developed using Moodle for the employees and clients of Khalifa Fund. The platform provides structured learning experiences that include company onboarding modules, code of conduct lessons, quizzes, and progress tracking. It delivers a secure and user-friendly environment with role-based dashboards and organized course navigation to support continuous training and evaluation.",
    tags: ["Moodle", "LMS", "Elearning"],
    image: "/khalifa.webp",
  },
  {
    slug: "portfolio-website",
    title: "CRM & Case Management Platform (ASUN Migrations)",
    description:
      "A modern, services website designed for ASUN Migrations, an Australian migration consultancy. The site highlights their services, success stories, and company information with a clean, trustworthy visual identity. Optimized for SEO and performance, it supports clear navigation for visa services and client inquiries.",
    tags: ["Next.js", "Tailwind", "Frontend"],
    image: "/asunmigrations.webp",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white border-t border-white/5 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-blue uppercase">
            Clients Projects
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            Projects I have worked on
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-300">
            A selection of work that highlights my full-stack skills across
            front-end, back-end, and learning platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl bg-slate-800/70 border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/50 border border-white/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4 pt-2">
                  <button className="text-sm font-medium text-brand-blue hover:text-brand-blue/80">
                    View project →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
