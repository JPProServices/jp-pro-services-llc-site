'use client';

import { useEffect } from 'react';

export default function ScrollHeader() {
  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 100; // Distance to scroll before full transparency
      
      // Calculate opacity: starts at 1 (solid), goes to 0.85 (transparent) as you scroll
      const opacity = Math.max(0.85, 1 - (scrolled / maxScroll) * 0.15);
      
      // Calculate blur: starts at 20px, goes to 12px for lighter effect
      const blur = Math.max(12, 20 - (scrolled / maxScroll) * 8);
      
      header.style.background = `rgba(0, 0, 0, ${opacity})`;
      header.style.backdropFilter = `blur(${blur}px)`;
      header.style.webkitBackdropFilter = `blur(${blur}px)`;
      
      // Add subtle border fade
      const borderOpacity = Math.max(0.3, 1 - (scrolled / maxScroll) * 0.7);
      header.style.borderBottomColor = `rgba(100, 116, 139, ${borderOpacity})`;
    };

    // Set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}