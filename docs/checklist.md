# Acceptance Checklist

## Performance
- Lighthouse scores ≥95 (Performance, A11y, Best Practices, SEO).
- Home LCP < 2.5s, CLS < 0.1.
- JS bundle < 250KB gzipped.
- Verify with `npm run build && npx next lighthouse https://...`.

## Accessibility
- All interactive elements keyboard‑focusable.
- ARIA labels on icons.
- Color contrast AA/AAA (check via `axe` or Chrome DevTools).
- Screen reader test (NVDA/VoiceOver) for nav, modals, forms.

## SEO
- Unique `<title>` and `<meta>` per route.
- Open Graph tags in `layout.tsx`.
- `/sitemap.xml` & `/robots.txt` via Next built-in route handlers.
- Structured data: `Product` and `FAQPage`.

## Responsiveness
- Test at widths: 320px, 768px, 1024px, 1440px, 4K.
- Sticky compare table on desktop; stacked on mobile.

## Animations
- Framer Motion 60fps (chrome devtools).
- Page transitions using `layoutId`.
- Hero parallax verified with slow scroll.

## Testing
- `npm test` passes.
- Add more unit/interaction tests as features grow.
