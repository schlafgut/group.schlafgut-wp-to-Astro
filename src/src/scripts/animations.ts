/**
 * GSAP Animation Utilities
 *
 * Shared animation configurations and helper functions
 * for consistent animations across the site.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Default animation settings matching original WordPress site
 */
export const animationDefaults = {
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1,
};

/**
 * ScrollTrigger default settings
 */
export const scrollTriggerDefaults = {
  start: 'top 85%',
  toggleActions: 'play none none none' as const,
};

/**
 * Initialize all GSAP animations
 * Called once on page load
 */
export function initAnimations(): void {
  // Ticker animation is handled by Ticker component
  // Other animations initialized here
}

export { gsap, ScrollTrigger };
