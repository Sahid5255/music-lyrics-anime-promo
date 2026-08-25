import { X } from "lucide-react";

export default function ImageModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
        aria-label="Close image"
      >
        <X />
      </button>

      <div
        className="max-h-[90vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[75vh] w-auto rounded-xl object-contain"
        />

        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          <p className="mt-1 text-white/50">
            {project.artist}
          </p>
        </div>
      </div>
    </div>
  );
}