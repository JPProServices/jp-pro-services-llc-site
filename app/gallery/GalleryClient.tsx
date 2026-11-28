"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };
type Project = { id: number; name: string; service: string; images: Photo[] };

const projects: Project[] = [
  {
    id: 1,
    name: "Roof replacement",
    service: "Roofing",
    images: [
      { src: "/images/roofing/roof-2026-11-hero.jpg", alt: "Aerial view of a brick home with a new shingle roof" },
      { src: "/images/roofing/roof-2026-11-rear.jpg", alt: "Rear view of the same home with its new roof" },
      { src: "/images/roofing/roof-2026-11-top-down.jpg", alt: "Top-down view of the finished roof" },
    ],
  },
  {
    id: 2,
    name: "Stained wood deck",
    service: "Decks",
    images: [
      { src: "/images/decks/stained-deck-hero.jpg", alt: "Two-story stained wood deck with stairs on a brick home" },
      { src: "/images/decks/stained-deck-aerial.jpg", alt: "The same deck from above" },
      { src: "/images/decks/stained-deck-stairs.jpg", alt: "Deck stairs and railing" },
    ],
  },
  {
    id: 3,
    name: "Screened porch",
    service: "Outdoor living",
    images: [
      { src: "/images/decks/screened-porch.jpg", alt: "Elevated screened porch with stairs on a white brick home" },
      { src: "/images/decks/screened-porch-aerial.jpg", alt: "The screened porch from above" },
    ],
  },
  {
    id: 4,
    name: "Copper gutters",
    service: "Gutters",
    images: [
      { src: "/images/roofing/copper-gutters-side.jpg", alt: "New copper gutters and downspouts on a painted brick home" },
      { src: "/images/roofing/copper-gutters-gable.jpg", alt: "Copper gutters along a steep gable roof" },
    ],
  },
  {
    id: 5,
    name: "Board-and-batten siding",
    service: "Siding",
    images: [
      { src: "/images/siding/board-batten-gable-hero.jpg", alt: "Board-and-batten siding on a gable above brick" },
      { src: "/images/siding/board-batten-dormer.jpg", alt: "Board-and-batten siding on a dormer" },
    ],
  },
  {
    id: 6,
    name: "Deck with black balusters",
    service: "Decks",
    images: [
      { src: "/images/decks/deck-black-balusters.jpg", alt: "New wood deck with black metal balusters" },
      { src: "/images/decks/deck-stairs-front.jpg", alt: "The same deck with its stairs" },
    ],
  },
  {
    id: 7,
    name: "Sunroom",
    service: "Remodeling",
    images: [
      { src: "/images/remodel/sunroom-side.jpg", alt: "Sunroom with tall windows on a yellow home" },
      { src: "/images/remodel/sunroom-progress.jpg", alt: "Crew finishing the sunroom" },
    ],
  },
  {
    id: 8,
    name: "Roof replacement",
    service: "Roofing",
    images: [
      { src: "/images/roofing/ranch-pool-roof.jpg", alt: "Brick ranch home with a new roof and patio cover" },
      { src: "/images/roofing/ranch-roof-top.jpg", alt: "Top-down view of the new roof" },
    ],
  },
  {
    id: 9,
    name: "Roofing project",
    service: "Roofing",
    images: [
      { src: "/roof7_1.JPG", alt: "Brick home with a new roof, seen from above" },
      { src: "/roof7_3.JPEG", alt: "Front of the brick home with its new roof" },
      { src: "/roof7_4.JPEG", alt: "Rear of the home with its new roof and pool" },
    ],
  },
  {
    id: 10,
    name: "Roofing project",
    service: "Roofing",
    images: [
      { src: "/roof4_1.JPG", alt: "Stone and brick home with a dark shingle roof" },
      { src: "/roof4_2.JPG", alt: "Side view of the same roof" },
    ],
  },
  {
    id: 11,
    name: "Roofing project",
    service: "Roofing",
    images: [
      { src: "/roof3_1.JPG", alt: "Home with a new roof beside a pool" },
      { src: "/roof3_2.JPEG", alt: "The same home from above" },
    ],
  },
  {
    id: 12,
    name: "Roofing project",
    service: "Roofing",
    images: [
      { src: "/roof1_1.jpeg", alt: "Two-story brick home with a new roof" },
      { src: "/roof1_2.jpeg", alt: "Closer view of the same roof" },
    ],
  },
];

export default function GalleryClient() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = (project: Project, trigger: HTMLElement) => {
    opener.current = trigger;
    setSelected(project);
    setIndex(0);
  };

  const close = () => {
    setSelected(null);
    setIndex(0);
    opener.current?.focus();
  };

  const step = (direction: 1 | -1) => {
    if (!selected) return;
    const count = selected.images.length;
    setIndex((current) => (current + direction + count) % count);
  };

  // Keyboard: Escape closes, arrows move between photos, Tab stays inside the dialog.
  useEffect(() => {
    if (!selected) return;
    closeButton.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const count = selected.images.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        setIndex(0);
        opener.current?.focus();
      }
      if (e.key === "ArrowLeft") setIndex((current) => (current - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((current) => (current + 1) % count);
      if (e.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>("#gallery-dialog button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <main className="bg-black min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto w-[min(1200px,94%)] text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Recent Projects</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Roofs, gutters, decks, screened porches, siding and remodeling for homeowners around Nashville.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="mx-auto w-[min(1400px,94%)]">
          <ul className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {projects.map((project, position) => (
              <li key={project.id} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={(e) => open(project, e.currentTarget)}
                  aria-label={`View ${project.images.length} photos: ${project.name}`}
                  className="group block w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 text-left transition-shadow duration-300 hover:shadow-2xl"
                >
                  <span className="relative block">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      width={400}
                      height={300}
                      priority={position < 4}
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="font-semibold text-white">{project.name}</span>
                    <span className="text-sm text-slate-400">{project.service}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-t from-zinc-900 to-black">
        <div className="mx-auto w-[min(1200px,94%)] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Call us Monday–Saturday, 8:00 AM–4:00 PM, or request a free estimate online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+16159564920" className="btn-gold inline-flex items-center justify-center rounded-xl px-8 py-4 font-extrabold shadow-lg">
              Call (615) 956-4920
            </a>
            <a
              href="/#estimate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-yellow-400 text-yellow-400 font-bold transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {selected ? (
        <div
          id="gallery-dialog"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} photos`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white">
              <div>
                <h2 className="text-lg font-bold">{selected.name}</h2>
                <p className="text-sm text-white/70" aria-live="polite">
                  Photo {index + 1} of {selected.images.length}
                </p>
              </div>
              <button
                ref={closeButton}
                type="button"
                onClick={close}
                aria-label="Close project photos"
                className="rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-yellow-400"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <Image
                src={selected.images[index].src}
                alt={selected.images[index].alt}
                width={1200}
                height={800}
                sizes="(min-width: 1200px) 1152px, 94vw"
                className="h-auto max-h-[75vh] w-full rounded-lg object-contain shadow-2xl"
              />
              {selected.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white transition-colors hover:bg-black/80"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white transition-colors hover:bg-black/80"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : null}
            </div>

            {selected.images.length > 1 ? (
              <div className="mt-4 flex justify-center gap-2">
                {selected.images.map((image, i) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show photo ${i + 1} of ${selected.images.length}`}
                    aria-current={i === index}
                    className={`overflow-hidden rounded transition-opacity ${i === index ? "ring-2 ring-yellow-400" : "opacity-70 hover:opacity-100"}`}
                  >
                    <Image src={image.src} alt="" width={60} height={45} className="h-9 w-12 object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
