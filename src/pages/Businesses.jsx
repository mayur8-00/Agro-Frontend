import { useEffect, useState } from "react";
import { PageHero } from "../components/Layout";
import { getContent } from "../services/api";
const fallback = [
  {
    title: "Crop Intelligence",
    description:
      "Data-led recommendations that help farms plan, protect and prosper.",
  },
  {
    title: "Seeds & Crop Solutions",
    description:
      "High-performance seeds and science-backed crop care for stronger harvests.",
  },
  {
    title: "Water Stewardship",
    description:
      "Precision irrigation and watershed solutions that make every drop count.",
  },
  {
    title: "Food & Supply Chain",
    description:
      "Traceable processing and market connections that unlock value beyond the farm.",
  },
];
export default function Businesses() {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    getContent("businesses")
      .then(setItems)
      .catch(() => {});
  }, []);
  return (
    <>
      <PageHero
        eyebrow="Our businesses"
        title="Solutions with the whole farm in view."
        copy="Across the value chain, our teams turn agricultural ambition into measurable progress."
      />
      <section className="section grid gap-5 md:grid-cols-2">
        {items.map((x) => (
          <article
            className="border border-slate-200 p-8 hover:border-moss"
            key={x.title}
          >
            <p className="eyebrow text-moss">Agrova business</p>
            <h2 className="mt-5 font-display text-3xl text-forest">
              {x.title}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{x.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
