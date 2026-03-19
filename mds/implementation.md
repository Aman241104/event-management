# Implementation Guide (The Ivory & Verdant Collection)

Technical blueprint for the 2026 Light Editorial Edition.

---

## Step 1 — Theme Tokens (Tailwind v4)

Update `src/app/globals.css`:
```css
@theme {
  --color-canvas: #FCFBF7;
  --color-surface: #F4F1EA;
  --color-heritage: #2A4D37;
  --color-burnished: #C5A059;
  --color-ebonized: #1C1C1C;
  --color-linen: #D9D4C7;
}
```

## Step 2 — Component Migration

- [ ] **Navbar**: Change background from Obsidian to Glassmorphic Ivory. Text from Gold to Heritage Green.
- [ ] **Hero**: Background visuals with Ivory overlays or soft fades. Playfair Display text in Ebonized Wood.
- [ ] **Buttons**: Refactor from "Gold-on-Black" to "Green-on-White" or "Gold-on-Ivory."
- [ ] **Cards**: Replace dark gradients with solid Ivory/Linen surfaces.
