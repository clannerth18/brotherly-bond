# Add Roadmap, About, FAQ, and align the footer

## What will change
- Add a dedicated Roadmap page with four milestones, an active Q3 2026 state, alternating horizontal cards on desktop, and a stacked vertical timeline on mobile.
- Replace the About placeholder with the supplied LitDEX story and four compact stat cards.
- Replace the FAQ placeholder with all supplied questions in a collapsed-by-default accordion.
- Add Roadmap to the footer navigation and rename About to About Us.
- Refine the footer into a slightly narrower blue panel whose outer edges and rounded shape align cleanly with the adjoining white content area.

## Visual direction
- Reuse the mint area's white surfaces, subtle borders and soft shadows.
- Reuse the blue-to-purple mint gradient for accents, active timeline details and labels.
- Keep small uppercase monospace labels consistent with existing status badges.
- Preserve the centered LitDEX logo, centered navigation, and centered social icon row.

## Technical details
- Create `src/routes/roadmap.tsx` with route-specific page metadata.
- Update the existing `/about` and `/faq` routes rather than adding duplicate pages.
- Use the existing accordion component for accessible FAQ expansion.
- Verify desktop and mobile layout, route navigation, collapsed FAQ state, footer alignment, and browser errors.
