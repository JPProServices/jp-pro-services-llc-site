"use client";
import { useState } from "react";

type Props = {
  variant?: "card" | "inline";
  kind?: "estimate" | "contact";  // NEW
};

export default function LeadCTA({ variant = "card", kind = "estimate" }: Props) {
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";
  const wrap =
    variant === "inline"
      ? "rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
      : "rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur";

  const [msg, setMsg] = useState<string | null>(null);

  const requiredNames =
    kind === "estimate"
      ? ["service", "address", "name", "phone", "consent"]
      : ["name", "email", "phone", "message", "consent"];

  // For inline contact forms, use full width. For others, use max-w-md ml-auto
  const containerClasses = (variant === "inline" && kind === "contact") 
    ? `${wrap} w-full` 
    : `${wrap} max-w-md ml-auto`;

  return (
    <aside className={containerClasses} aria-label={kind === "estimate" ? "Free inspection form" : "Contact form"}>
      <h3 className="mb-2 text-xl font-semibold text-white">
        {kind === "estimate" ? (
          <>Schedule your <strong>FREE</strong> Roof Inspection / Estimate</>
        ) : (
          <>Contact <strong>JP Pro Services</strong></>
        )}
      </h3>

      <form
        action={action}
        method="POST"
        className="grid gap-3"
        onSubmit={(e) => {
          const form = e.currentTarget;
          for (const name of requiredNames) {
            const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
            if (!el) continue;
            if ((el as HTMLInputElement).type === "checkbox" && !(el as HTMLInputElement).checked) {
              e.preventDefault(); setMsg("Please complete the required fields."); (el as HTMLInputElement).focus(); return;
            }
            if ((el as HTMLInputElement).value.trim() === "") {
              e.preventDefault(); setMsg("Please complete the required fields."); el.focus(); return;
            }
          }
          setMsg(null);
        }}
      >
        {/* Honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        {kind === "estimate" ? (
          <>
            <div>
              <label htmlFor="service" className="block text-sm text-slate-300">Choose Service*</label>
              <select id="service" name="service" required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring">
                <option value="">Select…</option>
                <option>Roof Replacement</option>
                <option>Roof Repair</option>
                <option>Storm Damage</option>
                <option>Residential Roofing</option>
                <option>Commercial Roofing</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm text-slate-300">Full Address*</label>
              <input id="address" name="address" required placeholder="Street, City, ZIP"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring" />
            </div>
          </>
        ) : null}

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300">Name*</label>
            <input id="name" name="name" required
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-slate-300">Phone Number*</label>
            <input id="phone" name="phone" inputMode="tel" required placeholder={phone}
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-300">Email*</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com"
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring" />
        </div>

        {kind === "contact" ? (
          <div>
            <label htmlFor="message" className="block text-sm text-slate-300">Message*</label>
            <textarea id="message" name="message" required rows={4} placeholder="How can we help?"
              className="mt-1 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-700 focus:ring" />
          </div>
        ) : null}

        <label className="flex items-start gap-2 text-xs text-slate-300">
          <input type="checkbox" name="consent" id="consent" required className="mt-[3px]" />
          <span>
            I agree to be contacted regarding my request. Msg/data rates may apply.
            Consent not required to purchase. <a href="#privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-3 font-extrabold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-800/25 active:scale-95">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative z-10 flex items-center gap-2">
            {kind === "estimate" ? "Schedule FREE Estimate" : "Send Message"}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {!!msg && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-800 text-sm animate-in slide-in-from-top-2 duration-300">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>{msg}</span>
          </div>
        )}
      </form>
    </aside>
  );
}