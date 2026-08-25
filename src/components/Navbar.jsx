import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cover Art",
    path: "/cover-art",
  },
  {
    name: "Animation",
    path: "/animation",
  },
  {
    name: "Lyrics Videos",
    path: "/lyrics-videos",
  },
  {
    name: "Promotion",
    path: "/promotion",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 font-black text-black">
            V
          </div>

          <div>
            <p className="text-sm font-black tracking-[0.25em]">
              VISUAL
            </p>

            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              Creative Studio
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-white/60 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 lg:flex"
        >
          Work With Me
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/10 p-2 lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#08090d] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-black"
            >
              Work With Me
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}