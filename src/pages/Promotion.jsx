import { useState } from "react";

import { promotionProjects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import ImageModal from "../components/ImageModal";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

export default function Promotion() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8">

        <SectionHeading
          eyebrow="Portfolio / Music Promotion"
          title="Creative campaigns designed to move releases forward."
          description="From social content to release campaigns, I help artists communicate their music visually and create stronger audience touchpoints."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {promotionProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              showResults
            />
          ))}

        </div>
      </section>

      <CTA />

      <ImageModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}