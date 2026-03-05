# Visual Design System (2026 Luxury Edition)

This document defines the "Emerald & Obsidian" design system for the Event Manager platform. It transitions from a tech-centric aesthetic to a high-end, luxury agency feel.

## Color System: Emerald, Gold, & Obsidian

The palette is designed to evoke prestige, stability, and exclusive celebration.

| Layer | Color Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Deep Forest / Emerald | `#064E3B` | Main background sections, secondary brand markers. |
| **Secondary** | Metallic Gold | `#D4AF37` | **Primary CTA**, highlights, premium badges, borders. |
| **Accent Gold** | Champagne Gold | `#FDE047` | Hover states for gold elements, subtle glows. |
| **Background** | Obsidian Black | `#020617` | Main page background (Default Canvas). |
| **Surface** | Dark Moss | `#022C22` | Card backgrounds, isolated containers. |
| **Border** | Muted Gold | `#854D0E` | Subtle dividers, high-end component outlines. |
| **Text Primary** | Ivory / Champagne | `#FDFCF0` | Primary headings and high-contrast body text. |
| **Text Secondary** | Moss Muted | `#A7F3D0` | Subtext, labels, and metadata. |
| **CTA Booking** | WhatsApp Green | `#22C55E` | Direct booking buttons (Conversion focus). |

### Usage Rules
- **Dark Mode Only:** Pure luxury dark mode. No light mode mirror.
- **Gold for Impact:** Gold (`#D4AF37`) is reserved for the most important interactive elements (e.g., "Book Now").
- **Contrast:** Ensure all Ivory text (`#FDFCF0`) meets WCAG AAA contrast on Obsidian backgrounds.
- **Hover States:** Elements should transition from Metallic Gold to Champagne Gold with a soft outer glow.

---

## Typography System: The "Editorial" Aesthetic

We pair a sophisticated Serif for headings with a highly legible Sans-Serif for a modern "Vogue-meets-Tech" feel.

### Font Family
- **Headings (Serif):** `Playfair Display, serif` or `Cormorant Garamond, serif`.
- **Body (Sans):** `Inter, sans-serif` or `Montserrat, sans-serif`.
- **Monospace:** `JetBrains Mono, monospace` (For timestamps and event IDs).

### Hierarchy
| Level | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero)** | 72px / 4.5rem | 800 (Extra Bold) | 1.0 | Hero page titles (All caps or Italic mix). |
| **H2 (Section)** | 48px / 3rem | 700 (Bold) | 1.1 | Major section headers. |
| **H3 (Title)** | 32px / 2rem | 600 (Semi Bold) | 1.2 | Card and module titles. |
| **Body Large** | 20px / 1.25rem | 400 (Regular) | 1.6 | Lead intro paragraphs. |
| **Body Base** | 16px / 1rem | 400 (Regular) | 1.6 | Standard body text. |
| **Small/Label** | 12px / 0.75rem | 600 (Bold) | 1.4 | Uppercase metadata with 0.1em tracking. |

---

## Spacing System: The "Breathable" Grid

Luxury is defined by generous whitespace and intentional padding.

- **8px (sm):** Grouping elements.
- **24px (md):** Standard component padding.
- **48px (lg):** Standard gap between adjacent cards.
- **96px (xl):** Vertical section spacing.
- **128px (2xl):** Hero section vertical padding.

---

## Layout Grid
- **Container Max-Width:** 1440px (For a wide, cinematic feel).
- **Side Padding:** 80px (Desktop), 24px (Mobile).
- **Grid:** 12-column layout with 32px gutters.

---

## Component Design

### Cards
- **Background:** Obsidian (`#020617`) with a 1px Gold border (`#854D0E`).
- **Radius:** 0px (Sharp, minimalist) or 32px (Organic luxury).
- **Visuals:** Subtle grain texture overlay at 5% opacity.
- **Hover:** Border color transitions to Metallic Gold (`#D4AF37`) with a 4px `y-translation` lift.

### Buttons (Premium CTAs)
- **Primary (Gold):** Background `#D4AF37`, Text `#020617`, Font: Serif Bold.
- **Secondary (WhatsApp):** Background `#22C55E`, Text `#FFFFFF`, Icon: MessageCircle.
- **Outline:** Border 1px `#D4AF37`, Text `#D4AF37`, Transparent background.
- **Radius:** 4px (Classic) or 999px (Modern).

### Inputs
- **Visuals:** Underline style (Bottom border only) or clean Obsidian boxes with thin Moss borders.
- **Focus:** Border glows Ivory (`#FDFCF0`).

### Navigation
- **Floating Bar:** Glassmorphic with Obsidian tint and a thin gold bottom-line.
- **Links:** Ivory text with gold underline on hover.

---

## Motion & Interaction (2026 Trends)
- **Scroll Trigger:** Content should "fade and slide" up as the user scrolls.
- **Cursor interaction:** Custom cursor (small gold dot) that expands when hovering over interactive elements.
- **Image Reveal:** Images should use a "scale-out" or "mask-slide" effect when entering the viewport.

---

## Section Layout Patterns

### Cinematic Hero
A full-screen background (Video or high-res image) with centered H1 typography. A single, large Gold CTA at the bottom.

### Editorial Services
Alternating 50/50 sections. One side features a full-bleed vertical image, the other side features a Serif H2, an Ivory Body paragraph, and a Gold "Inquire" link.

### The Prestige Gallery
Bento-style grid where images have 0px gutters (Edge-to-edge) for a high-end fashion/architecture feel. 

### Minimalist Testimonials
One large testimonial per screen width. H3 Serif quote text, minimal Ivory attribution. Use GSAP for a smooth horizontal drag/swipe.
