import { X } from "lucide-react";

export default function VideoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-3"
        aria-label="Close video"
      >
        <X />
      </button>

      <div
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl bg-black">

          {project.type === "youtube" && (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={project.video}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {project.type === "vimeo" && (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={project.video}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {project.type === "mp4" && (
            <video
              src={project.video}
              controls
              autoPlay
              className="max-h-[75vh] w-full"
            >
              Your browser does not support video playback.
            </video>
          )}

        </div>

        <div className="mt-5">
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