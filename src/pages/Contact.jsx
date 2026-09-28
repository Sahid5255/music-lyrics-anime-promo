import {ArrowRight, Clock, Mail, MessageCircle, Send,} from "lucide-react";

export default function Contact() {
  // =========================
  // FORM SUBMISSION
  // =========================
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/mzeplrdj", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your project request has been received.");
        form.reset();
      } else {
        alert(
          "Something went wrong while sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Unable to send your message. Please check your internet connection and try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-32 lg:px-12">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 sm:text-sm sm:tracking-[0.3em]">
              Let's Work Together
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
              Have a project in mind?

              <span className="mt-2 block text-purple-500">
                Let's bring it to life.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
              Whether you need professional cover art, a music
              animation, lyrics video, promotional campaign or
              creative visual content, tell me about your project
              and let's create something powerful together.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 md:px-10 lg:px-12">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">


          {/* =================================================
              PROJECT INQUIRY
          ================================================== */}
          <div className="order-1">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 lg:p-10">

              <div className="mb-8">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-sm">
                  Project Inquiry
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Tell me about your project
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  The more details you provide, the better I can
                  understand what you need.
                </p>

              </div>


              {/* =================================================
                  FORMSPREE FORM
              ================================================== */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* =========================
                    FULL NAME
                ========================== */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 sm:py-3.5"
                  />

                </div>


                {/* =========================
                    EMAIL
                ========================== */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 sm:py-3.5"
                  />

                </div>


                {/* =========================
                    PHONE
                ========================== */}
                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 sm:py-3.5"
                  />

                </div>


                {/* =========================
                    SERVICE
                ========================== */}
                <div>

                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Service Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-purple-500 sm:py-3.5"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Music Cover Art">
                      Music Cover Art
                    </option>

                    <option value="Music Animation">
                      Music Animation
                    </option>

                    <option value="Lyrics Video">
                      Lyrics Video
                    </option>

                    <option value="Music Promotion">
                      Music Promotion
                    </option>

                    <option value="Creative Visual Content">
                      Creative Visual Content
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* =========================
                    BUDGET
                ========================== */}
                <div>

                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-purple-500 sm:py-3.5"
                  >

                    <option value="" disabled>
                      Select your budget range
                    </option>

                    <option value="Under $100">
                      Under $100
                    </option>

                    <option value="$100 - $300">
                      $100 - $300
                    </option>

                    <option value="$300 - $500">
                      $300 - $500
                    </option>

                    <option value="$500 - $1,000">
                      $500 - $1,000
                    </option>

                    <option value="$1,000+">
                      $1,000+
                    </option>

                    <option value="Let's Discuss">
                      Let's Discuss
                    </option>

                  </select>

                </div>


                {/* =========================
                    MESSAGE
                ========================== */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Tell Me About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your song, project, deadline, visual style, references, and anything else I should know..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                  />

                </div>


                {/* =========================
                    SUBMIT BUTTON
                ========================== */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-purple-500 sm:gap-3 sm:text-base"
                >

                  <Send size={18} />

                  <span>
                    Send Project Request
                  </span>

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

              </form>

            </div>

          </div>


          {/* =================================================
              CONTACT DETAILS
          ================================================== */}
          <div className="order-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-sm">
                Contact Details
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let's talk about your next release.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Send me your project details and I'll get back to
                you as soon as possible.
              </p>


              {/* =========================
                  EMAIL
              ========================== */}
              <a
                href="mailto:sahidwebstudio@gmail.com"
                className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-purple-500/50 hover:bg-white/[0.04]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-white">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-400">
                    sahidwebstudio@gmail.com
                  </p>

                </div>

              </a>


              {/* =========================
                  WHATSAPP
              ========================== */}
              <a
                href="https://wa.me/14356917469"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-start gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-purple-500/50 hover:bg-white/[0.04]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <MessageCircle size={20} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    +1 XXX XXX XXXX
                  </p>

                </div>

              </a>


              {/* =========================
                  RESPONSE TIME
              ========================== */}
              <div className="mt-4 flex items-start gap-4 rounded-2xl border border-white/10 p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Clock size={20} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Response Time
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Always active 24/7.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-sm">
                Social Media
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Follow my work and see the latest projects,
                designs and creative content.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Instagram */}
                <a
                  href="https://instagram.com/sahidstudio253"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                >

                  <span className="font-bold">
                    IG
                  </span>

                  <span>
                    Instagram
                  </span>

                </a>


                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@sahidwebstudio52?_r=1&_t=ZS-999zMNhhvBE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                >

                  <span className="text-xs font-bold">
                    TT
                  </span>

                  <span>
                    TikTok
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="border-t border-white/10 px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-12">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
            <MessageCircle size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            Ready to make your next release stand out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Let's create visuals that match the energy of your
            music and give your audience something they won't
            forget.
          </p>

          <a
            href="https://wa.me/14356917469"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-purple-500 hover:text-white sm:px-7 sm:text-base"
          >

            <MessageCircle size={18} />

            Chat On WhatsApp

          </a>

        </div>

      </section>

    </main>
  );
}