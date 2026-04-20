# 🎨 Hexpert — Master Colors Like a Pro

> A premium, all-in-one color learning platform for designers, developers, and color enthusiasts. Explore 250+ colors, train with advanced quizzes, generate gradients, check contrast, and much more — all in the browser with no backend required.

![Light Mode](https://img.shields.io/badge/theme-light%20%2F%20dark-blueviolet)
![Colors](https://img.shields.io/badge/colors-250%2B-ff69b4)
![Quiz Modes](https://img.shields.io/badge/quiz%20modes-4-orange)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

### 🌗 Premium UI / Dark Mode
- Glassmorphism design with frosted-glass cards
- Animated gradient background blobs
- One-click **Dark / Light mode** toggle (persisted in browser storage)
- Google Fonts (Inter + JetBrains Mono), gradient headings, scroll-to-top button
- Toast notifications for all user actions

### 🧠 Advanced Quiz (4 Modes)

| Mode | Description |
|---|---|
| 🎯 Multiple Choice | Pick the name from 4 shuffled options (keyboard shortcuts 1–4) |
| ✏️ Type Answer | Type the exact color name; press Enter to submit |
| 🔢 Guess Hex | See the color, type its `#RRGGBB` hex code |
| 🔄 Name → Color | Given the name, pick the correct color swatch from 4 options |

- **▶ Start · ⏸ Pause / Resume · ⏹ Stop · 🔄 New Quiz** controls
- ❤️❤️❤️ **Lives system** — 3 wrong answers ends the game
- **Countdown timer** with animated bar (urgency turns red at 8s)
- **3 Difficulty levels** — Easy (30s) · Medium (25s) · Hard (18s) · All (20s)
- **Leaderboard** — top 10 scores stored in `localStorage`
- **Stats panel** — accuracy %, best streak, total answered

### 🧰 Color Tools

| Tool | What it does |
|---|---|
| 🎨 Color Picker | HEX / RGB / HSL / name · luminance · warm/cool · shades & tints |
| 🌈 Gradient Generator | 3-color gradients · 5 directions · radial · Copy CSS / Tailwind class |
| 🔁 Color Converter | Convert between HEX ↔ RGB ↔ HSL ↔ CMYK |
| ⚖️ Contrast Checker | Live WCAG AA / AAA / AA-Large badges with preview |
| 🎵 Harmony Generator | Complementary · Analogous · Triadic · Split · Tetradic · Monochromatic |

### ⭐ My Palette
- Save favorites from any color card with ☆ Fav
- Export your palette as **CSS custom properties** (`:root { ... }`)
- Clear all with one click

### 📚 Color Library (250+ Colors)
- 8 categories: Reds · Blues · Greens · Purples · Yellows & Oranges · Pinks · Browns · Grays
- **Sort by:** Name A–Z · Hue · Brightness · Default
- **Filter by** category
- Per-card **Harmony panel** — see complementary, analogous, and triadic harmonies inline
- Click any card to copy its hex code

### 🔍 Smart Search
- Real-time search by color name or hex code
- Empty sections are hidden automatically

---

## 🚀 Getting Started

No build step, no server, no dependencies.

```bash
git clone https://github.com/yourname/hexpert.git
cd hexpert
# Open index.html in your browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

---

## 📁 Project Structure

```
hexpert/
├── index.html       # App structure — navbar, hero, tools, quiz, library, footer
├── styles.css       # Premium CSS — glassmorphism, dark/light mode, all components
├── script.js        # All logic — quiz engine, tools, library, search, favorites
├── Assets/          # Any supplementary assets
└── README.md        # This file
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `1` – `4` | Select MCQ option during quiz |
| `Enter` | Submit text / hex answer |
| Theme toggle | Click 🌙 / ☀️ in the navbar |

---

## 🛠️ Built With

- **Vanilla HTML / CSS / JavaScript** — no frameworks, no build tools
- [Font Awesome 6](https://fontawesome.com/) — icons
- [Google Fonts](https://fonts.google.com/) — Inter & JetBrains Mono
- Browser `localStorage` — persistence for theme, favorites, and scores

---

## 📄 License

MIT © 2026 Hexpert
