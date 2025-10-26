"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeProject();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateInProject('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateInProject('next');
          break;
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject, currentImageIndex]);
  
  // Organized roof projects with all their images
  const roofProjects = [
    {
      id: 1,
      name: "Residential Roofing Project",
      images: [
        { src: "/roof1_1.jpeg", alt: "Residential roof project 1 - main view" },
        { src: "/roof1_2.jpeg", alt: "Residential roof project 1 - detail view" }
      ]
    },
    {
      id: 2,
      name: "Commercial Roofing Project", 
      images: [
        { src: "/roof2_1.jpeg", alt: "Commercial roof project 2 - main view" },
        { src: "/roof2_2.jpeg", alt: "Commercial roof project 2 - side view" },
        { src: "/roof2_3.jpeg", alt: "Commercial roof project 2 - detail view" },
        { src: "/roof2_4.jpeg", alt: "Commercial roof project 2 - completion view" },
        { src: "/roof2_5.jpeg", alt: "Commercial roof project 2 - final inspection" }
      ]
    },
    {
      id: 3,
      name: "Roof Replacement Project",
      images: [
        { src: "/roof3_1.JPG", alt: "Roof replacement project 3 - main view" },
        { src: "/roof3_2.JPEG", alt: "Roof replacement project 3 - completion view" }
      ]
    },
    {
      id: 4,
      name: "Complete Roof Installation Project",
      images: [
        { src: "/roof4_1.JPG", alt: "Complete roof installation project 4 - main view" },
        { src: "/roof4_2.JPG", alt: "Complete roof installation project 4 - progress view" },
        { src: "/roof4_3.JPG", alt: "Complete roof installation project 4 - detail work" },
        { src: "/roof4_4.JPG", alt: "Complete roof installation project 4 - final result" }
      ]
    },
    {
      id: 5,
      name: "Residential Roofing Project",
      images: [
        { src: "/roof5_1.JPEG", alt: "Residential roofing project 5 - completed roof" }
      ]
    },
    {
      id: 6,
      name: "Professional Installation Project",
      images: [
        { src: "/roof6_1.JPG", alt: "Professional installation project 6 - main view" },
        { src: "/roof6_2.JPG", alt: "Professional installation project 6 - finished work" }
      ]
    },
    {
      id: 7,
      name: "Complex Roofing Project",
      images: [
        { src: "/roof7_1.JPG", alt: "Complex roofing project 7 - main view" },
        { src: "/roof7_2.JPEG", alt: "Complex roofing project 7 - progress view" },
        { src: "/roof7_3.JPEG", alt: "Complex roofing project 7 - detail work" },
        { src: "/roof7_4.JPEG", alt: "Complex roofing project 7 - completion stage" },
        { src: "/roof7_5.JPEG", alt: "Complex roofing project 7 - final result" }
      ]
    },
    {
      id: 8,
      name: "Roof Repair Project",
      images: [
        { src: "/roof8_1.jpeg", alt: "Roof repair project 8 - completed repair" }
      ]
    }
  ];

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const navigateInProject = (direction: 'prev' | 'next') => {
    if (selectedProject === null) return;
    
    const currentProject = roofProjects.find(p => p.id === selectedProject);
    if (!currentProject) return;
    
    const maxIndex = currentProject.images.length - 1;
    
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? maxIndex : currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex === maxIndex ? 0 : currentImageIndex + 1);
    }
  };

  const getCurrentProject = () => {
    return roofProjects.find(p => p.id === selectedProject);
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
            {roofProjects.map((project) => (
              <div 
                key={project.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
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

      {/* Project Viewer Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          <div className="relative max-w-6xl w-full max-h-[95vh]">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute -top-14 right-0 text-white hover:text-yellow-500 transition-colors z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Title */}
            <div className="absolute -top-14 left-0 text-white">
              <h3 className="text-lg font-bold">{getCurrentProject()?.name}</h3>
              <p className="text-sm text-white/70">
                Image {currentImageIndex + 1} of {getCurrentProject()?.images.length}
              </p>
            </div>

            {/* Navigation Buttons - Only show if multiple images */}
            {getCurrentProject() && getCurrentProject()!.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateInProject('prev'); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all z-10 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); navigateInProject('next'); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all z-10 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center h-full">
              {getCurrentProject() && (
                <Image
                  src={getCurrentProject()!.images[currentImageIndex].src}
                  alt={getCurrentProject()!.images[currentImageIndex].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[95vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </div>

            {/* Image Thumbnails Navigation (for projects with multiple images) */}
            {getCurrentProject() && getCurrentProject()!.images.length > 1 && (
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur p-3 rounded-lg">
                {getCurrentProject()!.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                    className={`relative overflow-hidden rounded transition-all ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-yellow-500 scale-110' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      width={60}
                      height={45}
                      className="w-12 h-9 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Keyboard Navigation Hint */}
            {getCurrentProject() && getCurrentProject()!.images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center">
                Use arrow keys or click arrows to navigate • Press ESC to close
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}