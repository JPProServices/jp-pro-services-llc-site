import Image from "next/image";
import type { ReactNode } from "react";

import HeroMedia from "@/components/HeroMedia";
import JsonLd, { serviceJsonLd } from "@/components/JsonLd";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

type Photo = { src: string; alt: string };
type LinkItem = { href: string; label: string };

type Props = {
  path: string;
  name: string;
  headline: string;
  intro: string;
  heroImage: Photo | null;
  offerings: { title: string; text: string }[];
  products: string[];
  warranty: { label: string; value: string }[];
  gallery: Photo[];
  galleryNote?: string;
  related?: { title: string; links: LinkItem[] }[];
  aside?: ReactNode;
};

const PHONE = "(615) 956-4920";

export default function ServicePage({
  path,
  name,
  headline,
  intro,
  heroImage,
  offerings,
  products,
  warranty,
  gallery,
  galleryNote,
  related,
  aside,
}: Props) {
  return (
    <main>
      <JsonLd data={serviceJsonLd(name, intro, path)} />
      {/* Hero */}
      <section className="relative isolate">
        {heroImage ? (
          <HeroMedia poster={heroImage.src} />
        ) : (
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-black to-blue-700/40" />
        )}
        <div className="relative z-10 mx-auto grid w-[min(1200px,94%)] items-start gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">{name}</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">{headline}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-200">{intro}</p>
            <div className="mt-6">
              <TrustBadges showLicensedBadge={false} />
            </div>
          </div>
          <div className="md:pt-2">
            <LeadCTA />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <h2 className="mb-8 text-3xl font-bold text-white">What we do</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/15 bg-white/10 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products and warranty */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto grid w-[min(1200px,94%)] grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-black/40 p-8">
            <h2 className="text-2xl font-bold text-white">Products we use</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {products.map((product) => (
                <li key={product} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500" aria-hidden />
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/15 bg-black/40 p-8">
            <h2 className="text-2xl font-bold text-white">Warranty</h2>
            <dl className="mt-5 space-y-4">
              {warranty.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0">
                  <dt className="text-slate-300">{row.label}</dt>
                  <dd className="text-xl font-bold text-white">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <h2 className="text-3xl font-bold text-white">Recent work</h2>
          {galleryNote ? <p className="mt-2 text-slate-400">{galleryNote}</p> : null}
          {gallery.length ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((photo) => (
                <figure key={photo.src}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex aspect-[3/2] items-center justify-center rounded-xl border-2 border-dashed border-zinc-600 p-6 text-center text-slate-400"
                >
                  [Project photo {n}: coming from Jessica]
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {related?.length ? (
        <section className="bg-zinc-900 py-16">
          <div className="mx-auto grid w-[min(1200px,94%)] grid-cols-1 gap-8 md:grid-cols-2">
            {related.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl font-bold text-white">{group.title}</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white transition-colors duration-200 hover:border-yellow-500 hover:text-yellow-400"
                      >
                        {link.label}
                        <span aria-hidden>→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {aside}

      {/* Closing call to action */}
      <section className="bg-black py-16">
        <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-gradient-to-r from-blue-700 to-blue-600 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Get a free estimate</h2>
            <p className="mt-2 text-blue-100">Call us Mon–Sat, 8:00 AM–4:00 PM, or send the form and we'll call you back.</p>
          </div>
          <a href="tel:+16159564920" className="btn-gold inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold">
            Call {PHONE}
          </a>
        </div>
      </section>
    </main>
  );
}
