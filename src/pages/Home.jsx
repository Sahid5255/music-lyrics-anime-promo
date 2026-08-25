import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Palette,
  Megaphone,
  Video,
  Music2,
  Check,
} from "lucide-react";

import { coverArts } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

const services = [
  {
    icon: Palette,
    title: "Cover Art Design",
    text: "Distinctive artwork that gives every release a visual identity worth remembering.",
  },
  {
    icon: Video,
    title: "Music Animation",
    text: "Motion graphics and animated visuals that turn your sound into an experience.",
  },
  {
    icon: Music2,
    title: "Lyrics Videos",
    text: "Cinematic lyric experiences built to keep listeners watching and engaged.",
  },
  {
    icon: Megaphone,
    title: "Music Promotion",
    text: "Creative promotional campaigns designed to help your release reach more people.",
  },
];

const reasons = [
  "Music-industry focused creative direction",
  "Premium visual design",
  "Fast and professional communication",
  "Creative concepts tailored to each artist",
  "Design and promotion under one roof",
  "Built for social media and digital platforms",
];

const testimonials = [
  {
    quote:
      "The artwork completely changed how people perceived the release. It looked like a serious record before they even heard it.",
    name: "Alex Morgan",
    role: "Independent Artist",
  },
  {
    quote:
      "The animation gave our campaign another level of energy. The visuals felt modern, cinematic and completely on-brand.",
    name: "Jordan Lee",
    role: "Music Manager",
  },
  {
    quote:
      "Professional communication, strong creative direction and a final result that looked better than what I imagined.",
    name: "Chris Williams",
    role: "Recording Artist",
  },
];

export default function Home() {
  const featuredProjects = coverArts.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.15),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={14} />
              Creative Studio for Music
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Visuals That Make Your Music
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                {" "}Impossible to Ignore.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
              I create premium cover art, music animation, lyrics videos
              and promotional visuals for artists who want their music
              to look as powerful as it sounds.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/cover-art"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold transition hover:bg-white/5"
              >
                Work With Me
                <ArrowUpRight size={18} />
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/40">
              <span>Cover Art</span>
              <span>Animation</span>
              <span>Lyrics Videos</span>
              <span>Promotion</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4">

              {featuredProjects.slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  className={`overflow-hidden rounded-3xl border border-white/10 ${
                    index === 1 ? "translate-y-10" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">

        <SectionHeading
          eyebrow="What I Do"
          title="Creative services built around your music."
          description="Every project is designed to strengthen your identity, communicate your sound visually and help you stand out in a crowded digital landscape."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {service.text}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <SectionHeading
            eyebrow="Selected Work"
            title="A few projects from the studio."
          />

          <Link
            to="/cover-art"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
          >
            Explore portfolio
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 lg:grid-cols-2 lg:items-center">

          <div>
            <SectionHeading
              eyebrow="Why Work With Me"
              title="Your music deserves more than a generic template."
              description="The goal isn't just to make something beautiful. It's to create visuals that feel like they belong to your music, your audience and your brand."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                  <Check size={15} />
                </div>

                <p className="text-sm leading-6 text-white/70">
                  {reason}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">

        <SectionHeading
          eyebrow="Client Feedback"
          title="Creative work that clients remember."
          centered
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="text-3xl text-cyan-300">
                "
              </div>

              <p className="mt-3 leading-7 text-white/65">
                {testimonial.quote}
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="font-bold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}

        </div>
      </section>

      <CTA />
    </>
  );
}