"use client";

import { useState } from "react";

type Props = { variant?: "card" | "inline" };

export default function LeadCTA({ variant = "card" }: Props) {
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";
  const wrap =
    variant === "inline"
      ? "rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
      : "rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur md:p-5";

  const [msg, setMsg] = useState<string | null>(null);

  return (
    <aside className={wrap} aria-label="Free inspection form">
      <h3 className="mb-2 text-xl font-semibold text-white">
        Schedule your <strong>FREE</strong> Roof Inspection / Estimate
      </h3>

      <form
        action={action}
        method="POST"
        className="grid gap-3"
        onSubmit={(e) => {
          const form = e.currentTarget;
          const required = ["service", "address", "name", "phone", "consent"];
          for (const name of required) {
            const el = form.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`);
            if (!el) continue;
            if ((el as HTMLInputElement).type === "checkbox" && !(el as HTMLInputElement).checked) {
              e.preventDefault(); setMsg("Please complete the required fields."); (el as HTMLInputElement).focus(); return;
            }
            if ((el.value || "").trim() === "") {
              e.preventDefault(); setMsg("Please complete the required fields."); el.focus(); return;
            }
          }
          setMsg(null);
        }}
      >
        {/* Honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="service" className="block text-sm text-slate-300">Choose Service*</label>
          <select id="service" name="service" required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-500 focus:ring">
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
                 className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-500 focus:ring" />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300">Name*</label>
            <input id="name" name="name" required
                   className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-500 focus:ring" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-slate-300">Phone Number*</label>
            <input id="phone" name="phone" inputMode="tel" required placeholder={phone}
                   className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-500 focus:ring" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com"
                 className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-blue-500 focus:ring" />
        </div>

        <label className="flex items-start gap-2 text-xs text-slate-300">
          <input type="checkbox" name="consent" id="consent" required className="mt-[3px]" />
          <span>
            I agree to be contacted regarding my request. Msg/data rates may apply.
            Consent not required to purchase. <a href="#privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-extrabold text-white hover:brightness-110">
          Schedule FREE Estimate
        </button>

        {!!msg && <div className="text-sm text-rose-300">{msg}</div>}
      </form>
    </aside>
  );
}