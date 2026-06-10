# Apt Intel — Landing Page

Official landing page for **Apt Intel**, a premium software engineering partner building tailored systems for serious operational challenges.

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Font | DM Sans (Google Fonts) |

---

## Project Structure

```
src/
├── assets/
│   ├── icons/          # SVG icons and logos
│   └── images/         # Section images (dashboard, whyus photo)
├── components/
│   ├── layout/
│   │   ├── Header.jsx  # Sticky navbar with mobile hamburger menu
│   │   └── Footer.jsx  # Footer with nav, contact, and legal links
│   └── sections/
│       ├── Hero.jsx
│       ├── WhatWeDo.jsx
│       ├── Process.jsx
│       ├── Solutions.jsx
│       ├── WhyUs.jsx
│       ├── UseCases.jsx
│       ├── FAQ.jsx
│       └── ContactCTA.jsx
├── index.css           # Global styles + mobile responsive overrides
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Responsive Design

The site is built desktop-first with a dedicated mobile breakpoint at `767px`. Mobile overrides are written in `src/index.css` using `@media (max-width: 767px)` with `!important` declarations to override Figma-sourced inline styles.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Headline, body copy, CTA buttons, and dashboard mockup |
| **What We Do** | Four capability cards |
| **Process** | Five-step engagement process with desktop horizontal and mobile vertical timeline |
| **Solutions** | Six solution cards in a responsive grid |
| **Why Us** | Four reasons with photo and stats |
| **Use Cases** | Industry chips showing sectors served |
| **FAQ** | Accordion with engagement model details |
| **Contact CTA** | Dark card with email CTA |

---

## License

© 2026 Aptitude Intelligence. All rights reserved.
