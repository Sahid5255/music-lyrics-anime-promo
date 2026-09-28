import {
  ArrowRight,
  Mail,
  // MapPin,
  MessageCircle,
  Music2,
  // Video,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-1">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600">
                <Music2 size={22} />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight">
                  MUSIC<span className="text-purple-500">VISUALS</span>
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Creative Studio
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Professional music visuals, cover art, animation,
              lyrics videos and music promotion designed to help
              artists stand out and connect with their audience.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-sm text-gray-300 transition hover:text-purple-400"
            >
              <MessageCircle size={18} />

              <span>
                Chat with me on WhatsApp
              </span>
            </a>

          </div>


          {/* =========================
              NAVIGATION
          ========================== */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/cover-art"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Cover Art
              </Link>

              <Link
                to="/animation"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Music Animation
              </Link>

              <Link
                to="/lyrics-videos"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Lyrics Videos
              </Link>

              <Link
                to="/promotion"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Music Promotion
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* =========================
              SERVICES
          ========================== */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <div className="flex flex-col gap-4">

              <p className="text-sm text-gray-400">
                Music Cover Art
              </p>

              <p className="text-sm text-gray-400">
                Music Animation
              </p>

              <p className="text-sm text-gray-400">
                Lyrics Videos
              </p>

              <p className="text-sm text-gray-400">
                Music Promotion
              </p>

              <p className="text-sm text-gray-400">
                Creative Visual Content
              </p>

              <p className="text-sm text-gray-400">
                Artist Branding
              </p>

            </div>

          </div>


          {/* =========================
              CONTACT
          ========================== */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:sahidwebstudio@gmail.com"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  sahidwebstudio@gmail.com
                </span>
              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/14356917469"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  +14356917469
                </span>
              </a>


              {/* Location
              <div className="flex items-start gap-3 text-sm text-gray-400">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  Lagos, Nigeria
                </span>

              </div> */}

            </div>


            {/* =========================
                SOCIAL LINKS
            ========================== */}
            <div className="mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Follow Me
              </p>

              <div className="flex flex-wrap gap-3">

                {/* Instagram */}
                <a
                  href="https://instagram.com/sahidstudio253"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  IG
                </a>


                {/* Facebook */}
                {/* <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  f
                </a> */}


                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@sahidwebstudio52?_r=1&_t=ZS-999zMNhhvBE"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  TT
                </a>


                {/* YouTube */}
                {/* <a
                  href="https://youtube.com/@yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  <Video size={18} />
                </a> */}

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            CTA
        ========================== */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-950/50 via-black to-purple-950/30 p-8 md:p-10">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Start A Project
              </p>

              <h3 className="max-w-xl text-2xl font-bold md:text-3xl">
                Have a project in mind?
                Let's bring your music to life.
              </h3>

            </div>


            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-purple-500 hover:text-white"
            >
              Work With Me

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">

          <p>
            © {new Date().getFullYear()} MusicVisuals Creative Studio.
            All rights reserved.
          </p>

          <p>
            Designed for artists who want to stand out.
          </p>

        </div>

      </div>

    </footer>
  );
}