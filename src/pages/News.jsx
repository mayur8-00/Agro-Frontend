import { useEffect, useState } from "react";
import { PageHero } from "../components/Layout";
import { getContent } from "../services/api";
const fallback = [
  {
    category: "Sustainability",
    title: "A new watershed partnership takes root",
    description:
      "Village-led restoration is bringing water security back to dryland farms.",
  },
  {
    category: "AgriTech",
    title: "From soil samples to confident decisions",
    description:
      "How field intelligence is helping growers act at the right time.",
  },
  {
    category: "Communities",
    title: "Harvesting possibility with women entrepreneurs",
    description:
      "Local enterprise is creating new routes from farm gate to market.",
  },
];
export default function News() {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    getContent("stories")
      .then(setItems)
      .catch(() => {});
  }, []);
  return (
    <>
      <PageHero
        eyebrow="News & stories"
        title="The people and possibilities moving agriculture forward."
        copy="News, field notes and perspectives from across Agrova."
      />
      <section className="section grid gap-6 md:grid-cols-3">
        {items.map((x) => (
          <article key={x.title}>
            <div className="h-48 bg-moss/15" />
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-moss">
              {x.category}
            </p>
            <h2 className="mt-3 font-display text-2xl text-forest">
              {x.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {x.description}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
