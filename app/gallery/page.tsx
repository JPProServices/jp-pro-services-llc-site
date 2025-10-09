"use client";
import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Array of roof images
  const roofImages = [
    { id: 1, src: "/roof1.JPEG", alt: "Completed residential roof project" },
    { id: 2, src: "/roof2.JPG", alt: "Professional roofing installation" },
    { id: 3, src: "/roof3.JPG", alt: "Quality roof replacement" },
    { id: 4, src: "/roof4.JPG", alt: "Expert roofing craftsmanship" },
    { id: 5, src: "/roof5.JPG", alt: "Residential roofing project" },
    { id: 6, src: "/roof6.JPG", alt: "Professional roof installation" },
    { id: 7, src: "/roof7.JPG", alt: "Completed roofing work" },
    { id: 8, src: "/roof8.JPG", alt: "Quality residential roofing" },
    { id: 9, src: "/roof9.JPG", alt: "Expert roof replacement" },
    { id: 10, src: "/roof10.JPG", alt: "Professional roofing project" }
  ];

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 1 ? 10 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === 10 ? 1 : selectedImage + 1);
    }
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Recent Projects
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Take a look at our latest completed roofing projects across Nashville and Middle Tennessee. 
              Each roof represents our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-black">
        <div className="mx-auto w-[min(1400px,94%)]">
          {/* Masonry Grid Container */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {roofImages.map((image, index) => (
              <div 
                key={image.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ aspectRatio: 'auto' }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-zinc-900 to-black">
        <div className="mx-auto w-[min(1200px,94%)] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See Your Brand New Roof Here?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers across Nashville and Middle Tennessee. 
            Your dream roof is just one call away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:(615) 705-0779"
              className="group btn-gold neon relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-4 font-extrabold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                📞 Call Now: (615) 705-0779
              </span>
            </a>
            
            <a 
              href="/#estimate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Get FREE Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={roofImages.find(img => img.id === selectedImage)?.src || ''}
                alt={roofImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImage} of {roofImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}