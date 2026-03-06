# Gemini Context: Event Manager

## Last Updated: 2026-03-06

## Project Status
- **Framework:** Next.js (App Router), Tailwind CSS v4, GSAP.
- **Visual Style:** "Emerald & Obsidian" Luxury theme (Deep Forest, Obsidian Black, Gold).
- **Recent Actions:** 
  - Fixed visual bugs:
    - **Custom Cursor:** Hidden system cursor globally, fixed follower border color to Gold, and raised z-index above noise overlay.
    - **Navbar:** Repositioned and improved visibility of the gold hover underline.
    - **Forms:** Increased placeholder contrast for better readability on dark backgrounds.
  - Improved animation responsiveness:
    - Standardized `ScrollTrigger` start points to `top 92%` (triggered earlier).
    - Reduced animation durations across `fade-up`, `TextReveal`, and `MaskSlideImage` by ~20% for a snappier feel.
    - Optimized Preloader and hero animations for a faster initial load experience.
  - Successfully verified the build (`npm run build`).
- **Current Branch:** `main` (clean working tree).

## Context Summary
The project is a high-end event management agency website ("Prestige Edition"). It features a custom gold cursor, preloader, and editorial-style page structures. Key components include `MaskSlideImage`, `TextReveal`, and `SVGSpine`.

## Development Focus
- High-fidelity visual storytelling.
- GSAP-based animations (intentional and slow).
- Mobile-first "Concierge" experience with WhatsApp integration.
- Feature-based atomic design.

## To-Do / Active Tasks
- [x] Initial setup and project understanding.
- [x] Revert to stable pushed state.
- [ ] *Awaiting further instructions.*
