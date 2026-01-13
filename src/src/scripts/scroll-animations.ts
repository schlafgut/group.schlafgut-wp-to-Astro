/**
 * Scroll-triggered animations using GSAP ScrollTrigger
 *
 * Implements slide-in effects for elements entering the viewport,
 * matching the original WordPress site animations.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize slide-in animations for elements with .slide-in-element class
 */
export function initSlideInAnimations(): void {
  const elements = document.querySelectorAll('.slide-in-element');

  elements.forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/**
 * Initialize staggered animations for grid items
 * Elements with .stagger-item within a .stagger-container
 */
export function initStaggerAnimations(): void {
  const containers = document.querySelectorAll('.stagger-container');

  containers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');

    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/**
 * Initialize blur-to-sharp reveal animations for images with data-blur attribute
 */
export function initBlurAnimations(): void {
  const images = document.querySelectorAll('[data-blur="true"]');

  images.forEach((img) => {
    // Set initial state
    gsap.set(img, {
      filter: 'blur(10px)',
      opacity: 0.8,
    });

    // Animate to sharp on scroll
    gsap.to(img, {
      filter: 'blur(0px)',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/**
 * Initialize all scroll-based animations
 */
export function initScrollAnimations(): void {
  initSlideInAnimations();
  initStaggerAnimations();
  initBlurAnimations();
}

export { gsap, ScrollTrigger };
