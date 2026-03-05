# Implementation Guide (Prestige Edition)

This document provides a technical blueprint for implementing the **Emerald & Obsidian** (2026 Luxury Edition) Event Manager platform. Follow these steps to ensure the high-end editorial aesthetic is maintained.

---

## Step 1 — Project Initialization

### 1.1 Scaffold & Dependencies
Ensure the project is initialized with Next.js 16+, Tailwind CSS v4, and GSAP.
```bash
npm install lucide-react gsap @gsap/react clsx tailwind-merge
```

### 1.2 Directory Structure
Maintain the **Atomic Design** structure:
- `src/components/atoms` (Button, Card, Badge, Input, Logo)
- `src/components/molecules` (Gallery, Testimonial, ConciergeBar)
- `src/components/organisms` (Navbar, Footer, Hero)

---

## Step 2 — Design System Setup (Luxury Tokens)

### 2.1 Color Palette & Theme
In `src/app/globals.css`, define the "Prestige Edition" tokens using the Tailwind v4 `@theme` directive.

**Color Map:**
- `--primary-emerald`: `#064E3B` (Deep Forest)
- `--secondary-gold`: `#D4AF37` (Metallic Gold)
- `--accent-gold`: `#FDE047` (Champagne Gold)
- `--bg-obsidian`: `#020617` (Main Canvas)
- `--bg-surface`: `#022C22` (Dark Moss)
- `--border-gold`: `#854D0E` (Muted Gold)
- `--text-ivory`: `#FDFCF0` (Primary Text)
- `--text-moss`: `#A7F3D0` (Secondary Text)

### 2.2 Typography
Configure `next/font` for the "Editorial" pair:
- **Serif:** `Playfair Display` (for all H1, H2, H3 headers).
- **Sans:** `Inter` (for body text and UI labels).
- **Mono:** `JetBrains Mono` (for technical metadata).

### 2.3 Spacing & Borders
- **Grid:** 1440px max-width, 32px gutters.
- **Borders:** Strictly 1px Gold (`--border-gold`). Remove all generic shadows.
- **Radius:** 0px for a sharp minimalist look or 32px for organic luxury.

---

## Step 3 — Prestige UI Components (Atoms)

### 3.1 Button Component (Gold)
- **Primary:** Background Metallic Gold, Text Obsidian Black, Serif Font Bold.
- **Secondary (WhatsApp):** Background WhatsApp Green, Text White.
- **Motion:** 400ms transition time, subtle soft glow on hover.

### 3.2 Card Component (Obsidian)
- **Background:** Obsidian Black.
- **Border:** 1px Muted Gold.
- **Radius:** 0px or 32px.
- **Hover:** Lift 4px, border transition to Metallic Gold.

### 3.3 Concierge Bar (Sticky)
- Bottom-aligned floating bar for mobile users.
- Features a direct "Message an Agent" WhatsApp link.

---

## Step 4 — High-Fidelity Molecules & Page Layouts

### 4.1 Cinematic Hero
- Full-screen background visuals with centered large-scale Serif typography.
- Single, prominent Gold CTA with a "scale-in" entry animation.

### 4.2 Editorial Services
- 50/50 alternating sections.
- High-contrast typography (Ivory on Obsidian) and full-bleed imagery.

### 4.3 Prestige Gallery
- Edge-to-edge bento grid with 0px gutters.
- "Mask-slide" reveal animations for each item.

---

## Step 5 — Sophisticated Interaction (GSAP)

### 5.1 Intentional Motion
- Use `useGSAP` for all animation logic.
- **Duration:** 400ms to 600ms for all primary transitions.
- **Easing:** `expo.out` or `power3.out` for a smooth, prestige feel.

### 5.2 Scroll Trigger Reveals
- Content should fade and slide up subtly as it enters the viewport.
- Staggered reveals for gallery items.

### 5.3 Custom Cursor
- Implement a small gold dot cursor that expands when hovering over interactive elements.

---

## Step 6 — WhatsApp Concierge Integration

### 6.1 Personalized Inquiries
- Utility for context-specific WhatsApp strings: `https://wa.me/[Number]?text=[EncodedMessage]`.
- Example: "I am interested in the [ServiceName] for an exclusive event."

---

## Step 7 — Optimization & Verification

- [ ] **Contrast:** Ensure Ivory text passes AAA on Obsidian.
- [ ] **Performance:** Sub-second loads for high-res editorial assets.
- [ ] **Responsive:** Generous whitespace remains intentional on mobile.
- [ ] **Build:** `npm run build` check for zero errors.
