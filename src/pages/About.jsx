import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Palette,
  Video,
  Megaphone,
  Layers,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We discuss your music, audience, references and the feeling you want the project to communicate.",
  },
  {
    number: "02",
    title: "Concept",
    text: "I develop a visual direction that matches your sound and creates a strong identity.",
  },
  {
    number: "03",
    title: "Create",
    text: "The chosen concept is developed into polished artwork, motion or promotional content.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "You receive production-ready assets prepared for your platforms and release campaign.",
  },
];

const skills = [
  "Creative direction",
  "Graphic design",
  "Music branding",
  "Motion graphics",
  "Video editing",
  "Social media content",
  "Music promotion",
  "Digital campaign strategy",
];

export default function About() {
  return (
    <>
      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              About the sahidwebstudio
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
              I help artists turn sound into a visual identity.
            </h1>

            <p className="mt-7 text-lg leading-8 text-white/55">
              I'm a creative professional focused on music visuals,
              design and promotion. My work sits between graphic design,
              motion and music culture — creating visuals that feel
              intentional, modern and built for attention.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-black"
            >
              Let's work together
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative">

            <div className="absolute -inset-5 rounded-3xl bg-violet-500/10 blur-3xl" />

            {/* <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src="https://placehold.co/1000x1250/111827/ffffff?text=YOUR+PHOTO"
                alt="Creative professional placeholder"
                className="h-full w-full object-cover"
              />
            </div> */}

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">

          <SectionHeading
            eyebrow="Experience"
            title="Creative thinking with a music-first approach."
            description="Every artist is different. That's why I don't believe in forcing every project into the same visual formula."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 p-6">
              <Palette className="text-cyan-300" />
              <h3 className="mt-5 font-bold">Design</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Artwork and branding built around your musical identity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <Video className="text-cyan-300" />
              <h3 className="mt-5 font-bold">Motion</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Motion graphics and animated visuals that bring releases alive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <Megaphone className="text-cyan-300" />
              <h3 className="mt-5 font-bold">Promotion</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Creative campaigns designed around audience attention.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <Layers className="text-cyan-300" />
              <h3 className="mt-5 font-bold">Content</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Flexible assets that keep your release visually consistent.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">

        <SectionHeading
          eyebrow="Creative Process"
          title="A simple process. Strong creative results."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {process.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-sm font-black text-cyan-300">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">

          <SectionHeading
            eyebrow="Skills"
            title="What I bring to the project."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
              >
                <Check size={17} className="text-cyan-300" />
                <span className="text-sm text-white/70">
                  {skill}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}