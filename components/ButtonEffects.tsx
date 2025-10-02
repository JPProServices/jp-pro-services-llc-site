'use client';

import { useEffect } from 'react';

export default function ButtonEffects() {
  useEffect(() => {
    // Add ripple effect to all gold buttons
    const addRippleEffect = () => {
      const buttons = document.querySelectorAll<HTMLElement>('.btn-gold');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const ripple = document.createElement('span');
          const rect = button.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = mouseEvent.clientX - rect.left - size / 2;
          const y = mouseEvent.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.classList.add('ripple-effect');
          
          button.appendChild(ripple);
          
          // Remove ripple after animation
          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      });
    };

    // Add particle burst effect
    const addParticleBurst = () => {
      const buttons = document.querySelectorAll<HTMLElement>('.btn-gold');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          // Create multiple floating particles
          for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              const particle = document.createElement('div');
              particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(232, 185, 35, ${0.8 - i * 0.1});
                border-radius: 50%;
                pointer-events: none;
                z-index: 10;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleBurst 1.5s ease-out forwards;
              `;
              
              button.appendChild(particle);
              
              setTimeout(() => {
                particle.remove();
              }, 1500);
            }, i * 100);
          }
        });
      });
    };

    // Add 3D tilt effect
    const add3DTiltEffect = () => {
      const buttons = document.querySelectorAll<HTMLElement>('.btn-gold');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.classList.add('tilt-active');
        });
        
        button.addEventListener('mousemove', (e: Event) => {
          if (!button.classList.contains('tilt-active')) return;
          
          const mouseEvent = e as MouseEvent;
          const rect = button.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / centerY * -10;
          const rotateY = (x - centerX) / centerX * 10;
          
          const moveX = (x - centerX) * 0.1;
          const moveY = (y - centerY) * 0.1;
          
          button.style.transform = `
            translateY(-2px) 
            scale(1.03) 
            translate(${moveX}px, ${moveY}px)
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            translateZ(20px)
          `;
        });
        
        button.addEventListener('mouseleave', () => {
          button.classList.remove('tilt-active');
          button.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0) translateZ(0)';
        });
      });
    };

    // Add form submission states
    const addFormStates = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        const submitButton = form.querySelector<HTMLElement>('.btn-gold');
        if (!submitButton) return;
        
        form.addEventListener('submit', () => {
          submitButton.classList.add('loading');
          submitButton.textContent = 'Sending...';
          
          // Simulate success after delay (replace with actual form handling)
          setTimeout(() => {
            submitButton.classList.remove('loading');
            submitButton.classList.add('success');
            submitButton.textContent = 'Sent Successfully!';
            
            setTimeout(() => {
              submitButton.classList.remove('success');
              submitButton.textContent = 'Schedule FREE Inspection';
            }, 3000);
          }, 2000);
        });
      });
    };

    // Initialize all effects
    setTimeout(() => {
      addRippleEffect();
      // addParticleBurst(); // Disabled for more professional look
      add3DTiltEffect();
      addFormStates();
    }, 100);

    // Add CSS animations for particles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleBurst {
        0% {
          transform: scale(0) translateY(0);
          opacity: 1;
        }
        50% {
          transform: scale(1) translateY(-20px);
          opacity: 0.8;
        }
        100% {
          transform: scale(0) translateY(-40px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}