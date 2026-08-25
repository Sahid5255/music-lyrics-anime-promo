import { Play } from "lucide-react";

export default function VideoCard({ project, onPlay }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

      <button
        type="button"
        onClick={() => onPlay(project)}
        className="block w-full text-left"
      >
        <div className="relative aspect-video overflow-hidden">

          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110">
              <Play size={22} fill="currentColor" />
            </div>
          </div>
        </div>
      </button>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
          {project.category}
        </p>

        <h3 className="mt-2 text-lg font-bold">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-white/50">
          {project.artist}
        </p>

        <p className="mt-4 text-sm leading-6 text-white/60">
          {project.description}
        </p>
      </div>
    </article>
  );
}