import { PageHero } from "../components/Layout";
export default function Standard({ type }) {
  const content = {
    about: [
      "About us",
      "Building a more confident agricultural future.",
      "Agrova brings together agronomists, engineers, operators and community partners to make agriculture more resilient.",
    ],
    sustainability: [
      "Sustainability",
      "Growth that gives back.",
      "Our commitments focus on regenerative practice, water resilience and opportunity for rural communities.",
    ],
    farmers: [
      "For farmers",
      "Partnership that starts in the field.",
      "Training, trusted advice and market connections that make progress practical.",
    ],
    agritech: [
      "AgriTech",
      "Clearer decisions, closer to the ground.",
      "We combine local expertise with precision tools that turn field information into useful action.",
    ],
    careers: [
      "Careers",
      "Do work that keeps the world growing.",
      "Bring your curiosity and care for people to a team building agriculture’s next chapter.",
    ],
  }[type];
  return (
    <>
      <PageHero eyebrow={content[0]} title={content[1]} copy={content[2]} />
      <section className="section">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl text-forest">
            Made for real-world impact.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Across each relationship and every region, our work begins with
            listening. We design practical solutions that respect local
            knowledge and build long-term value.
          </p>
        </div>
      </section>
    </>
  );
}
