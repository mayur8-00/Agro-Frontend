import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sprout,
  Droplets,
  ChartNoAxesCombined,
  Tractor,
} from "lucide-react";
const cards = [
  [
    "Crop Intelligence",
    "Decisions rooted in live field insight.",
    ChartNoAxesCombined,
  ],
  ["Seeds & Crop Solutions", "Better genetics. Healthier harvests.", Sprout],
  ["Water Stewardship", "Use every drop with intention.", Droplets],
  ["Food & Supply Chain", "Value that travels farther.", Tractor],
];
export default function Home() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-forest text-white">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#173d2b 5%,transparent),url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=2000&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Agriculture for the next generation</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              Growing progress, <i>responsibly.</i>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              We unite agronomy, technology and committed partnerships to help
              agriculture thrive for people and planet.
            </p>
            <Link className="button mt-9" to="/businesses">
              Explore our businesses <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-moss">Our ambition</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest">
              From the first seed to the future of food.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Agrova works across the agriculture value chain to grow harvests,
            restore natural resources and create dependable opportunity for
            farming communities.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, copy, Icon]) => (
            <div key={title} className="bg-white p-7">
              <Icon className="text-moss" />
              <h3 className="mt-12 font-display text-2xl text-forest">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-mist">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-moss">Sustainability</p>
            <h2 className="mt-4 font-display text-4xl text-forest md:text-5xl">
              Nourishing land. Empowering communities.
            </h2>
            <p className="mt-6 leading-7 text-slate-600">
              Every solution we build begins with a simple test: does it leave
              the farm, its people and its environment stronger?
            </p>
            <Link
              to="/sustainability"
              className="mt-8 inline-flex items-center gap-2 font-bold text-moss"
            >
              Our commitments <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["25,000+", "Farmer partners"],
              ["18", "Districts reached"],
              ["32%", "Average water saved"],
            ].map(([num, label]) => (
              <div className="bg-white px-3 py-10" key={label}>
                <p className="font-display text-3xl text-forest">{num}</p>
                <p className="mt-2 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
