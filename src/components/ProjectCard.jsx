import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  onClick,
  showResults = false,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

      <button
        type="button"
        onClick={() => onClick?.(project)}
        className="block w-full text-left"
      >
        <div className="relative aspect-square overflow-hidden">

          <img
            src={project.image}
            alt={`${project.title} by ${project.artist}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {project.category}
            </span>

            <h3 className="mt-2 text-lg font-bold">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-white/60">
              {project.artist}
            </p>
          </div>
        </div>
      </button>

      {showResults && project.results && (
        <div className="border-t border-white/10 p-4">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Results
          </p>

          <p className="mt-2 text-sm text-white/70">
            {project.results}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
          >
            View campaign
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </article>
  );
}