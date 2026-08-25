import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { coverArts } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import ImageModal from "../components/ImageModal";
import SectionHeading from "../components/SectionHeading";

export default function CoverArt() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(coverArts.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? coverArts
      : coverArts.filter(
          (project) => project.category === filter
        );

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">

        <SectionHeading
          eyebrow="Portfolio / Cover Art"
          title="Cover art that gives your release a visual identity."
          description="Explore selected artwork created for singles, albums, EPs and music campaigns."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === category
                  ? "bg-white text-black"
                  : "border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-7 sm:flex sm:items-center sm:justify-between">

          <div>

            <h3 className="text-xl font-bold">
              Need artwork for your next release?
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Let's create something that feels unmistakably yours.
            </p>

          </div>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black sm:mt-0"
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

      <ImageModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}