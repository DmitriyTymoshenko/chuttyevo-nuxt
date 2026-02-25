# Asset Manifest — Figma Frame 11199:19129

Source: Figma file `jaDhaDS0AWIAFzs9bXPciv`, frame `11199:19129`
Exported: 2026-02-24 at 2x scale (750×9376)

## Raster Images

| File              | Description                                                   | Dimensions (2x) | Notes                                       |
| ----------------- | ------------------------------------------------------------- | --------------- | ------------------------------------------- |
| `hero-banner.png` | Jewelry set (necklace, earrings, ring) on dark charcoal stone | 750×490         | Category hero for "Набори"                  |
| `product-1.png`   | Model wearing "Чорна конюшина" clover set                     | 680×700         | Includes necklace, earrings, bracelet, ring |
| `product-2.png`   | Daisy jewelry set in branded pink gift box                    | 680×700         | "chuttyevo" branded packaging visible       |
| `product-3.png`   | Silver leaf/branch crystal jewelry set on black velvet        | 680×660         | Botanical motif necklace + earrings         |
| `product-4.png`   | Fourth jewelry set product photo                              | 680×715         | Same product line                           |
| `about-image.png` | Brand story / about section image                             | 750×300         | Footer area brand imagery                   |
| `logo.png`        | "chuttyevo" fingerprint-heart logo mark                       | 250×70          | From header navigation                      |

## SVG Icons

| File               | Description              | Stroke              | Notes                      |
| ------------------ | ------------------------ | ------------------- | -------------------------- |
| `icons/search.svg` | Magnifying glass         | 1.5px, currentColor | Header nav                 |
| `icons/cart.svg`   | Shopping bag             | 1.5px, currentColor | Header nav                 |
| `icons/heart.svg`  | Heart/wishlist           | 1.5px, currentColor | Header nav + product cards |
| `icons/menu.svg`   | Hamburger menu (3 lines) | 1.5px, currentColor | Header nav                 |
| `icons/filter.svg` | Funnel filter            | 1.5px, currentColor | Product grid toolbar       |
| `icons/share.svg`  | Share nodes              | 1.5px, currentColor | Product cards              |
| `icons/user.svg`   | User/account             | 1.5px, currentColor | Header nav                 |

## Figma Fill Properties (CSS notes)

Based on visual analysis of the frame:

- **Hero banner**: No color overlay detected. Image fills at 100% opacity. The dark mood comes from the photography itself.
- **Product card images**: No opacity or color overlays on the image fills. Action buttons (heart, share, cart) are positioned as absolute overlays on the right side.
- **About section**: Appears to use standard image fill, no blend modes visible.
- **Newsletter section background**: Solid light mint/green (#E8F0E8 approximate). No image fill — pure CSS background color.
- **Header/Footer background**: Dark (#1E1E1E or similar), with white text/icons.
- **Product card background**: White (#FFFFFF).
- **All icons**: Thin stroke (1-1.5px), black (#1E1E1E) on light backgrounds, white on dark backgrounds. Use `currentColor` for flexibility.

## Pending (blocked by Figma rate limits)

- [ ] Individual source-quality image exports (requires node tree access via `/v1/files/.../nodes`)
- [ ] Exact image fill `imageRef` mapping per node
- [ ] Payment method logos (Visa, Mastercard)
- [ ] Figma component-level exports for pixel-perfect icons
