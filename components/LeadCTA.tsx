"use client";
import { useId, useState, type FormEvent } from "react";

type Props = {
  variant?: "card" | "inline";
  kind?: "estimate" | "contact";
};

type Status = { type: "idle" } | { type: "sending" } | { type: "sent" } | { type: "error"; message: string };

const PHONE = "(615) 956-4920";
const inputClass =
  "mt-1 w-full rounded-xl border border-slate-600 bg-black px-3 py-2 text-white placeholder-slate-400 transition-colors duration-200";

export default function LeadCTA({ variant = "card", kind = "estimate" }: Props) {
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  // Unique ids so two forms on one page don't share labels.
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const wrap =
    variant === "inline"
      ? "rounded-2xl border border-zinc-700 bg-zinc-800/90 p-4"
      : "rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur";
  const containerClasses = variant === "inline" && kind === "contact" ? `${wrap} w-full` : `${wrap} max-w-md ml-auto`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!action) {
      setStatus({ type: "error", message: `Our form isn't available right now. Please call us at ${PHONE}.` });
      return;
    }
    setStatus({ type: "sending" });
    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus({ type: "sent" });
    } catch {
      setStatus({ type: "error", message: `Something went wrong sending your request. Please call us at ${PHONE}.` });
    }
  }

  if (status.type === "sent") {
    return (
      <aside id={kind === "estimate" ? "estimate" : undefined} className={`${containerClasses} scroll-mt-28`}>
        <div role="status" className="py-6 text-center">
          <h2 className="text-xl font-semibold text-white">Thanks, we got your request.</h2>
          <p className="mt-2 text-slate-300">
            We&apos;ll get back to you during office hours, Monday–Saturday, 8:00 AM–4:00 PM. Need us sooner? Call{" "}
            <a href="tel:+16159564920" className="font-semibold text-yellow-400 underline underline-offset-4">{PHONE}</a>.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside
      id={kind === "estimate" ? "estimate" : undefined}
      className={`${containerClasses} scroll-mt-28`}
      aria-label={kind === "estimate" ? "Free estimate form" : "Contact form"}
    >
      <h2 className="mb-2 text-xl font-semibold text-white">
        {kind === "estimate" ? "Get your free estimate" : "Send us a message"}
      </h2>

      <form action={action} method="POST" className="grid gap-3" onSubmit={handleSubmit}>
        {/* Honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor={id("name")} className="block text-sm text-slate-300">Name*</label>
            <input id={id("name")} name="name" required autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor={id("phone")} className="block text-sm text-slate-300">Phone*</label>
            <input id={id("phone")} name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="Your phone number" className={inputClass} />
          </div>
        </div>

        {kind === "estimate" ? (
          <>
            <div>
              <label htmlFor={id("service")} className="block text-sm text-slate-300">What do you need?*</label>
              <select id={id("service")} name="service" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select…</option>
                <option>Roof Replacement</option>
                <option>Roof Repair</option>
                <option>Gutters</option>
                <option>Decks, Fencing &amp; Outdoor Living</option>
                <option>Siding &amp; Exterior Finishes</option>
                <option>Custom Remodeling</option>
                <option>Storm Damage / Insurance Claim</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor={id("address")} className="block text-sm text-slate-300">Project address*</label>
              <input id={id("address")} name="address" required autoComplete="street-address" placeholder="Street, City, ZIP" className={inputClass} />
            </div>
          </>
        ) : null}

        <div>
          <label htmlFor={id("email")} className="block text-sm text-slate-300">
            Email <span className="text-slate-400">(optional)</span>
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor={id("message")} className="block text-sm text-slate-300">
            {kind === "estimate" ? (
              <>Project details <span className="text-slate-400">(optional)</span></>
            ) : (
              "Message*"
            )}
          </label>
          <textarea
            id={id("message")}
            name="message"
            required={kind === "contact"}
            rows={kind === "estimate" ? 2 : 4}
            placeholder={kind === "estimate" ? "For example: new 12x16 deck with stairs" : "How can we help?"}
            className={`${inputClass} resize-y`}
          />
        </div>

        <label htmlFor={id("consent")} className="flex items-start gap-2 text-xs text-slate-300">
          <input type="checkbox" name="consent" id={id("consent")} required className="mt-[3px]" />
          <span>I agree to be contacted about my request by phone, text or email. Msg/data rates may apply.</span>
        </label>

        <button
          type="submit"
          disabled={status.type === "sending"}
          className="group btn-gold relative inline-flex items-center justify-center rounded-xl px-4 py-3 font-extrabold shadow-lg disabled:opacity-70"
        >
          <span className="flex items-center gap-2">
            {status.type === "sending" ? "Sending…" : kind === "estimate" ? "Get My Free Estimate" : "Send Message"}
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {status.type === "error" ? (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {status.message}
          </div>
        ) : null}
      </form>
    </aside>
  );
}
