import { useState } from "react";

import { animations } from "../data/portfolioData";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

export default function Animation() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8">

        <SectionHeading
          eyebrow="Portfolio / Music Animation"
          title="Turn sound into movement."
          description="Animated music visuals built for releases, social campaigns, visualizers and artist branding."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {animations.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onPlay={setSelectedVideo}
            />
          ))}

        </div>
      </section>

      <CTA />

      <VideoModal
        project={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}