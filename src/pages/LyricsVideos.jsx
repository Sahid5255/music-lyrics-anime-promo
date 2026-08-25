import { useState } from "react";
import {
  ArrowRight,
  Play,
  X,
  Music2,
} from "lucide-react";

import Lyrics1 from "../assets/Lyrics1.mp4";
import Lyrics2 from "../assets/Lyrics2.mp4";
import Lyrics3 from "../assets/Lyrics3.mp4";
import Lyrics4 from "../assets/Lyrics4.mp4";
import Lyrics5 from "../assets/Lyrics5.mp4";
import Lyrics6 from "../assets/Lyrics6.mp4";

const lyricsVideos = [
  {
    id: 1,
    title: "Midnight Dreams",
    description:
      "A cinematic lyrics video created for a contemporary music release.",
    video: Lyrics1,
  },
  {
    id: 2,
    title: "Lost Without You",
    description:
      "A moody visual lyrics experience designed around the emotion of the song.",
    video: Lyrics2,
  },
  {
    id: 3,
    title: "City Lights",
    description:
      "Modern typography and atmospheric visuals for an urban music release.",
    video: Lyrics3,
  },
  {
    id: 4,
    title: "After Hours",
    description:
      "A dark and stylish lyrics video built for a late-night music aesthetic.",
    video: Lyrics4,
  },
  {
    id: 5,
    title: "Higher",
    description:
      "Energetic lyrics animation created to match an uplifting music release.",
    video: Lyrics5,
  },
  {
    id: 6,
    title: "No Pressure",
    description:
      "Minimalist lyrics visuals with clean typography and smooth motion.",
    video: Lyrics6,
  },
];

export default function LyricsVideos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32 lg:px-12">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Music2 size={20} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Lyrics Videos
              </p>

            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Give Your Lyrics
              <span className="block text-purple-500">
                A Visual Voice.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              Cinematic lyrics videos designed to make your
              songs more engaging, memorable and visually
              powerful.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          PORTFOLIO
      ================================================== */}

      <section className="px-6 pb-24 md:px-10 lg:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Lyrics Video Projects
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Explore selected lyrics video projects created
              for artists and music releases.
            </p>

          </div>


          {/* ==================================================
              VIDEO GRID
          ================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {lyricsVideos.map((project) => (

              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
              >

                {/* Video Preview */}
                <div className="relative aspect-video overflow-hidden">

                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />


                  {/* Play button */}
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(project)}
                    aria-label={`Play ${project.title}`}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl transition duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white"
                  >
                    <Play
                      size={22}
                      fill="currentColor"
                    />
                  </button>


                  {/* Project number */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                    {String(project.id).padStart(2, "0")}
                  </div>

                </div>


                {/* Content */}
                <div className="p-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-400">
                    {project.artist}
                  </p>


                  <h3 className="mt-2 text-xl font-bold">
                    {project.title}
                  </h3>


                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>


                  <button
                    type="button"
                    onClick={() => setSelectedVideo(project)}
                    className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-purple-400"
                  >

                    Watch Video

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />

                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          VIDEO MODAL
      ================================================== */}

      {selectedVideo && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-purple-500"
            >
              <X size={20} />
            </button>


            {/* Video area */}
            <div className="aspect-video bg-black">

              {selectedVideo.video ? (

                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full"
                />

              ) : (

                <div className="flex h-full flex-col items-center justify-center px-6 text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                    <Play size={28} />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    {selectedVideo.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {selectedVideo.artist}
                  </p>

                  <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                    No video is available for this project.
                  </p>

                </div>

              )}

            </div>


            {/* Modal information */}
            <div className="border-t border-white/10 p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                {selectedVideo.artist}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {selectedVideo.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                {selectedVideo.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}