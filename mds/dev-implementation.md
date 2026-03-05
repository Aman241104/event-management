# Developer Implementation Plan

## Current Project Phase
Phase 8: Production Readiness & Optimization (Final Clean-up)

## Current Step
Step 8.1: Complete the migration of all remaining standard `<img>` tags to `next/image` across the entire application.

## Development Goals
- Ensure every visual asset in the application uses the `next/image` component.
- Maintain consistent luxury styling (grayscale filters, slow transitions) while gaining the performance benefits of Next.js optimization.
- Address missing image imports or components identified in the audit.

## Technical Strategy
- **next/image:** Use `fill` for absolute containers and fixed `width`/`height` for avatars.
- **Grayscale/Transitions:** Ensure classes like `grayscale group-hover:grayscale-0 transition-all duration-1000` are applied to the `Image` component's `className` or a wrapper.

## Files to Create or Modify
- `src/app/page.tsx` (Testimonial avatars)
- `src/app/events/page.tsx` (Event archive grid)
- `src/app/speakers/page.tsx` (Speaker portrait grid)
- `src/app/dashboard/page.tsx` (Analytics and Portfolio cards)
- `src/app/schedule/page.tsx` (Speaker avatars in timeline)
- `src/app/admin/events/new/page.tsx` (Live preview image)
- `src/components/molecules/Testimonial.tsx` (Component avatar)

## Implementation Breakdown
Task 1 — Update `src/app/page.tsx` testimonials.
Task 2 — Update `src/app/events/page.tsx` grid.
Task 3 — Update `src/app/speakers/page.tsx` grid.
Task 4 — Update `src/app/dashboard/page.tsx` cards.
Task 5 — Update `src/app/schedule/page.tsx` list.
Task 6 — Update `src/app/admin/events/new/page.tsx` preview.
Task 7 — Update `src/components/molecules/Testimonial.tsx`.
Task 8 — Final build verification.
