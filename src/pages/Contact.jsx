import { useState } from "react";
import { PageHero } from "../components/Layout";
import { sendContact } from "../services/api";
export default function Contact() {
  const [form, setForm] = useState({
      name: "",
      email: "",
      company: "",
      message: "",
    }),
    [status, setStatus] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");
    try {
      await sendContact(form);
      setStatus("Thank you. Our team will be in touch.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus(
        "The form needs the local API to be running. Please try again shortly.",
      );
    }
  };
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s grow something meaningful."
        copy="Tell us how we can help — whether you are a farmer, partner, customer or future colleague."
      />
      <section className="section">
        <form onSubmit={submit} className="grid max-w-3xl gap-5 md:grid-cols-2">
          {[
            ["name", "Your name"],
            ["email", "Email address"],
            ["company", "Organisation"],
          ].map(([key, label]) => (
            <label key={key} className="text-sm font-bold">
              {label}
              <input
                required={key !== "company"}
                type={key === "email" ? "email" : "text"}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="mt-2 w-full border border-slate-300 p-3 font-normal outline-moss"
              />
            </label>
          ))}
          <label className="text-sm font-bold md:col-span-2">
            How can we help?
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full border border-slate-300 p-3 font-normal outline-moss"
            />
          </label>
          <div className="md:col-span-2">
            <button className="button" type="submit">
              Send inquiry
            </button>
            {status && <p className="mt-4 text-sm text-moss">{status}</p>}
          </div>
        </form>
      </section>
    </>
  );
}
