# 3D Portfolio Website

An interactive, animated developer portfolio built with React, TypeScript, and Three.js — featuring a rotating 3D wireframe hero scene, a Matrix-style code-rain background, a Java-inspired loading animation, and smooth scroll-triggered reveals throughout.

**Live Demo:** _add your deployed link here_
**Repository:** https://github.com/HARSHANAND15/Portfolio

---

## Features

- **3D Hero Scene** — animated wireframe torus and sphere built with React Three Fiber
- **Matrix Code Rain** — canvas-based falling character animation
- **Java-Style Loading Screen** — typewriter effect simulating `System.out.println("Harsh Anand");` with a console-style output panel
- **Smooth Scroll** — buttery, momentum-based scrolling powered by Lenis
- **Scroll Reveal Animations** — sections fade and scale into view as you scroll
- **Custom Cursor** — glowing dot-and-ring cursor with hover interactions
- **Magnetic Buttons** — CTA buttons that subtly follow the cursor
- **3D Tilt Project Cards** — cards tilt on mouse movement for a tactile feel
- **Flip Cards** — project cards flip on hover to reveal a short description and links
- **Animated Background** — floating wireframe shapes rendered behind all content
- **Fully Responsive** — optimized layout for mobile, tablet, and desktop

---

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React, TypeScript, Vite |
| 3D / Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS v4 |
| Animation | Custom hooks (Intersection Observer), Lenis (smooth scroll) |
| Icons | lucide-react, custom SVG brand icons |
| Linting | ESLint |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer (future use)
│   ├── sections/     # Hero, About, Education, Experience, Projects, Contact
│   ├── three/        # 3D scene components (Canvas, geometry, lighting)
│   └── ui/           # Reusable UI: Reveal, SplitText, CustomCursor, etc.
├── hooks/            # Custom hooks (useInView, useMagnetic, useTilt, useSmoothScroll)
├── data/             # Portfolio content (education, experience, projects, skills)
├── assets/           # Images and static files
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/HARSHANAND15/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Customization

All personal content (education, work experience, projects, skills, and contact details) lives in a single file for easy editing:

```
src/data/portfolio.ts
```

Update the exported objects/arrays there to personalize the site without touching component code.

---

## Deployment

This project is a static Vite build and can be deployed on any static hosting platform:

- **Vercel** (recommended — zero-config for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## Author

**Harsh Anand**
Full Stack Developer
[GitHub](https://github.com/HARSHANAND15)
