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
 * Initialize number counter animation for BigNumbers section
 * Numbers count up from 0 to their target value when visible
 */
export function initNumberCounters(): void {
  const numberElements = document.querySelectorAll('.section__big-numbers .number[data-target]');

  numberElements.forEach((el) => {
    const target = el.getAttribute('data-target');
    if (!target) return;

    // Parse target number (handle thousands separator like "4.000")
    const targetNum = parseFloat(target.replace(/\./g, '').replace(',', '.'));
    const hasDecimal = target.includes(',');
    const hasSeparator = target.includes('.');

    // Create counter object
    const counter = { value: 0 };

    gsap.to(counter, {
      value: targetNum,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        // Format number based on original format
        let formatted: string;
        if (hasSeparator && targetNum >= 1000) {
          // German format with thousand separator (e.g., "4.000")
          formatted = Math.round(counter.value).toLocaleString('de-DE');
        } else if (hasDecimal) {
          formatted = counter.value.toFixed(1).replace('.', ',');
        } else {
          formatted = Math.round(counter.value).toString();
        }
        el.textContent = formatted;
      },
    });
  });
}

/**
 * Initialize staggered slide-in from right for image rows
 * Images in a row slide in one after another from right to left
 */
export function initImageRowSlideIn(): void {
  const imageRows = document.querySelectorAll('.image-row-animate');

  imageRows.forEach((row) => {
    const images = row.querySelectorAll('.image, .slideInElement');

    if (images.length === 0) return;

    // Set initial state - start from right, invisible
    gsap.set(images, {
      x: 80,
      opacity: 0,
    });

    // Animate in with stagger
    gsap.to(images, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 80%',
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
  initNumberCounters();
  initImageRowSlideIn();
}

export { gsap, ScrollTrigger };
