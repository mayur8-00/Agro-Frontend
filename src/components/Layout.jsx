import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sprout } from "lucide-react";
import { useState } from "react";
const links = [
  ["/about", "About Us"],
  ["/businesses", "Businesses"],
  ["/sustainability", "Sustainability"],
  ["/farmers", "Farmers"],
  ["/agritech", "AgriTech"],
  ["/careers", "Careers"],
  ["/news", "News & Stories"],
  ["/contact", "Contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute z-20 w-full text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <Sprout className="text-wheat" /> agrova
          <span className="text-wheat">.</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm xl:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className="hover:text-wheat">
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="bg-forest px-6 pb-6 xl:hidden">
          {links.map(([to, label]) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={to}
              to={to}
              className="block border-t border-white/15 py-3"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="section grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Sprout className="text-wheat" />
            agrova.
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/65">
            Growing progress, responsibly — from the soil beneath us to the
            communities around us.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold">Explore</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/65">
            {links.slice(0, 6).map(([to, label]) => (
              <Link key={to} to={to} className="hover:text-wheat">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold">Stay connected</p>
          <Link
            className="inline-flex items-center gap-1 text-sm text-wheat"
            to="/contact"
          >
            Talk with Agrova <ArrowUpRight size={16} />
          </Link>
          <p className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} Agrova. Built for a more resilient
            future.
          </p>
        </div>
      </div>
    </footer>
  );
}
export function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="bg-forest pt-36 text-white">
      <div className="section max-w-5xl py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{copy}</p>
      </div>
    </section>
  );
}
