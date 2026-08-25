import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-transparent p-8 sm:p-12 lg:p-16">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Start your project
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Have a project in mind?
            <span className="text-white/50">
              {" "}Let's bring your music to life.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-white/55">
            From a single cover artwork to a complete visual campaign,
            let's create something that gives your music the attention
            it deserves.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}