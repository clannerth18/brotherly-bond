# Railway Roadmap Restyle

## Goal
Turn the existing Roadmap timeline into a clean railway track while preserving every milestone card, its content, alternating desktop layout, mobile stacking, and existing spacing.

## Changes
- Replace the desktop center line with two close parallel rails and evenly spaced cross-ties.
- Render the reached section through the current Q3 2026 station in the existing blue-to-purple gradient; keep all future rails and ties in the current light grey.
- Replace milestone dots with compact circular station markers while preserving the current card connector lines.
- Place a minimal Lucide train icon at Q3 2026, centered over the track with a restrained blue-purple glow.
- Add a subtle horizontal idle motion for the train and disable it when reduced motion is preferred.
- Apply the same visual system to mobile: vertical parallel rails, horizontal ties, station markers, and the train at the current stop.

## Technical details
- Keep the work contained to the Roadmap route and shared styles needed for the animation.
- Build the rails and ties with CSS backgrounds/layers so they remain crisp and responsive without image assets.
- Preserve all current copy, page metadata, cards, connector placement, and the Back to mint button.
- Verify desktop and mobile rendering, alignment, overflow, and browser errors in the live preview.
