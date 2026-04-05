# 🚀 AstroViz — Space Mission Dashboard

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow?style=flat-square&logo=javascript)
![Chart.js](https://img.shields.io/badge/Chart.js-Graphs-FF6384?style=flat-square)
![ISS API](https://img.shields.io/badge/ISS-Live%20Tracker-00eaff?style=flat-square)
![Mars API](https://img.shields.io/badge/Mars-Weather%20API-red?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-green?style=flat-square)

A visually stunning **browser-based space mission dashboard** built with pure HTML, CSS, and JavaScript — featuring a live animated solar system, real-time ISS location tracking, Mars weather data, asteroid monitoring, satellite telemetry, interactive Chart.js graphs, and a particle dark matter background simulation.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Dashboard Sections](#-dashboard-sections)
- [API Integrations](#-api-integrations)
- [How It Works](#-how-it-works)
- [KPI Questions & Answers](#-kpi-questions--answers)
- [How to Run](#-how-to-run)
- [Future Improvements](#-future-improvements)

---

## 📖 Project Overview

**AstroViz** is a front-end space dashboard that pulls live data from real space APIs and presents it through a cinematic, dark-themed UI. It simulates a mission control interface with animated orbiting planets, a particle physics background, live ISS coordinates, Mars atmospheric data, and interactive pop-up charts — all in a single HTML file with no backend required.

---

## 🌐 Live Demo

> Open `index.html` directly in any modern browser — no server needed.  
> Works best on **Google Chrome** or **Microsoft Edge**.

---

## 📁 Project Structure

```
AstroViz/
│
├── index.html        # Main HTML structure — dashboard layout and sections
├── style.css         # Full styling — animations, solar system, glassmorphism cards
├── script.js         # All JavaScript — particles, API fetches, charts, modal
└── README.md         # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| `HTML5` | Page structure, canvas element, dashboard sections |
| `CSS3` | Animations, glassmorphism cards, solar system orbits, responsive grid |
| `JavaScript (ES6+)` | Particle simulation, API calls, chart rendering, modal logic |
| `Chart.js` | Interactive pop-up bar and line graphs |
| `Canvas API` | Dark matter particle background simulation |
| `Fetch API` | Async calls to ISS and Mars weather APIs |
| `Where The ISS At API` | Real-time ISS latitude, longitude, altitude, velocity |
| `MAAS2 Mars API` | Live Mars sol, temperature, pressure, season data |
| `Google Fonts (Orbitron)` | Space-themed futuristic typography |

---

## ✨ Features

- **Dark Matter Particle Canvas** — 100 animated particles that react to mouse movement, bouncing across the background
- **Animated Solar System** — 4 planets orbiting the sun in real CSS animation at different speeds
- **Glowing Title** — Pulsing glow animation on the AstroViz heading using CSS keyframes
- **Glassmorphism Cards** — Semi-transparent frosted-glass dashboard panels with hover scale effect
- **Live ISS Tracking** — Real-time ISS latitude, longitude, altitude, and velocity updated every 10 seconds
- **Mars Weather** — Live Sol number, min/max temperature, pressure, and season from Mars
- **Satellite Telemetry** — Speed, altitude, battery, and status panel
- **Asteroid Tracking** — Closest asteroid details including velocity, diameter, and threat level
- **Interactive Charts** — Pop-up modal with Chart.js graphs for telemetry, Mars temperature, and asteroid velocity
- **Responsive Design** — 2-column grid on desktop, single column on mobile (≤768px)
- **Auto-Refresh** — ISS location auto-updates every 10 seconds via `setInterval`

---

## 🖥️ Dashboard Sections

### 1. 🛰️ Satellite Telemetry
- Current speed, altitude, battery level, and system status
- "View Graph" button opens a line chart of speed over time (T-4 to Now)

### 2. 🌍 ISS Live Location
- Fetches real-time data from the Where The ISS At API
- Displays: Latitude, Longitude, Altitude (km), Velocity (km/h)
- Auto-refreshes every 10 seconds

### 3. 🪐 Mars Weather
- Fetches current Martian weather from MAAS2 Apollo Rion API
- Displays: Sol number, Min/Max Temperature, Atmospheric Pressure, Season
- "View Graph" button opens a bar chart comparing min and max temperature

### 4. ☄️ Asteroid Tracking
- Displays closest asteroid name, velocity, diameter, and threat level
- "View Graph" button opens a bar chart of velocity profiles for 3 asteroids

---

## 🔌 API Integrations

### 1. Where The ISS At API
- **Endpoint:** `https://api.wheretheiss.at/v1/satellites/25544`
- **Type:** Free, no API key required
- **Returns:** latitude, longitude, altitude, velocity, timestamp
- **Refresh Rate:** Every 10 seconds via `setInterval`

### 2. MAAS2 Mars Weather API (Apollo Rion)
- **Endpoint:** `https://api.maas2.apollorion.com/`
- **Type:** Free, no API key required
- **Returns:** sol, min_temp, max_temp, pressure, season, wind data

### 3. Chart.js (CDN)
- **Source:** `https://cdn.jsdelivr.net/npm/chart.js`
- **Usage:** Renders line and bar charts inside the pop-up modal

> ✅ Both space APIs are completely free with no authentication required.

---

## ⚙️ How It Works

```
Page loads
     ↓
Canvas initialized → 100 Particle objects created → animateParticles() loop starts
     ↓
mousemove event tracked → particles within 100px radius pulled toward cursor
     ↓
CSS animations run → 4 planets orbit the sun at different speeds (4s to 16s)
     ↓
fetchISSLocation() called → ISS API fetched → #iss-location section updated
     ↓
fetchMarsWeather() called → Mars API fetched → #mars-weather section updated
     ↓
setInterval(fetchISSLocation, 10000) → ISS data refreshes every 10 seconds
     ↓
window.onload → View Graph buttons injected into Telemetry and Asteroid sections
     ↓
User clicks "View Graph"
     ↓
showGraph(type) called → modal displayed → Chart.js renders appropriate chart
     ↓
User clicks ✕ → modal hidden
```

---

## ❓ KPI Questions & Answers

**Q1. What is AstroViz and what does it simulate?**
> AstroViz simulates a real mission control dashboard for space operations. It combines live space API data (ISS position, Mars weather) with visual elements (solar system, particle field) to create an immersive, information-rich space monitoring interface — all running entirely in the browser with no backend.

**Q2. How does the dark matter particle simulation work?**
> A `<canvas>` element is layered behind the dashboard using `position: fixed; z-index: -3`. 100 `Particle` objects are created, each with random position, radius, and velocity. On every animation frame, `ctx.clearRect` clears the canvas and each particle is redrawn at its updated position. When the mouse is within 100px of a particle, the particle is pulled toward the cursor by adding a fraction of the distance vector to its position — creating a gravity-like effect.

**Q3. How is the animated solar system built?**
> The solar system uses pure CSS — no JavaScript or SVG. Each orbit is a `div` with a circular border and a CSS `animation: rotate` keyframe that applies `transform: rotate(360deg)`. The planet is absolutely positioned at the edge of the orbit circle. Since the entire orbit div rotates, the planet orbits naturally. Different `animation-duration` values (4s, 7s, 11s, 16s) make each planet move at a unique speed.

**Q4. How does the ISS live tracking work?**
> `fetchISSLocation()` uses the `Fetch API` to call `https://api.wheretheiss.at/v1/satellites/25544` — a free public API that returns the ISS's current orbital data. The response JSON is parsed and the `#iss-location` section's `innerHTML` is updated with the new values. `setInterval(fetchISSLocation, 10000)` repeats this every 10 seconds, keeping the display current.

**Q5. How does the graph modal work?**
> Each dashboard section has a "View Graph" button that calls `showGraph(type)` with a type string (`'telemetry'`, `'mars'`, or `'asteroids'`). The function sets `modal.style.display = 'flex'` to show the overlay, then builds a Chart.js config object based on the type and renders it on the `#popupChart` canvas. Clicking the ✕ button sets `display = 'none'` to hide the modal.

**Q6. Why are the View Graph buttons added via JavaScript instead of HTML?**
> The Telemetry and Asteroid sections have their buttons added via `window.onload` in JavaScript using `innerHTML +=`. The Mars section adds its button dynamically after the API response arrives inside `fetchMarsWeather()`. This approach ensures buttons only appear after their data context is ready — preventing clicks before data loads.

**Q7. How does the glassmorphism card effect work?**
> Each dashboard `section` uses `background: rgba(255,255,255,0.08)` for semi-transparency, `backdrop-filter: blur(6px)` to blur whatever is behind it, and `border: 1px solid rgba(255,255,255,0.18)` for a subtle glass edge. On hover, `transform: scale(1.04)` slightly enlarges the card and the border changes to solid `#00eaff` with a cyan box-shadow glow — giving a selection/highlight feel.

**Q8. How is the layout made responsive?**
> The `.dashboard` uses CSS Grid with `grid-template-columns: repeat(2, 1fr)` for a two-column layout on desktop. A `@media (max-width: 768px)` breakpoint switches this to `grid-template-columns: 1fr` for a single-column stacked layout on mobile. Font sizes for the title and glow span are also reduced at the breakpoint.

**Q9. What happens if an API call fails?**
> Both `fetchISSLocation()` and `fetchMarsWeather()` are wrapped in `try/catch` blocks. If the fetch fails (network error, API down), the error is logged to the console via `console.error()` and the section retains its last content — the UI doesn't break or show an error to the user. A future improvement would be showing a user-facing fallback message.

**Q10. How can this project be extended or deployed?**
> AstroViz is pure static HTML and can be deployed instantly on GitHub Pages, Netlify, or Vercel with zero configuration. Extensions could include a real NASA Near Earth Objects API for live asteroid data, a 3D Three.js solar system, a dark/light mode toggle, audio space ambience, a world map showing the ISS ground track, or NASA APOD (Astronomy Picture of the Day) integration.

---

## ▶️ How to Run

### Option 1 — Open directly
```
1. Download or clone the repository
2. Open index.html in Google Chrome or Edge
3. No setup, no install, no server needed
```

### Option 2 — Clone via Git
```bash
git clone https://github.com/your-username/astroviz.git
cd astroviz
# Open index.html in your browser
```

### Option 3 — Deploy on GitHub Pages
```
1. Push the repo to GitHub
2. Go to Settings → Pages
3. Set source to main branch / root
4. Live at: https://your-username.github.io/astroviz
```

> ⚠️ **Note:** The MAAS2 Mars API and ISS API are free public APIs with no key required, but they may occasionally be unavailable. The dashboard will still render with static data if APIs are unreachable.

---

## 🚀 Future Improvements

- Integrate NASA NeoWs API for real live asteroid data instead of static values
- Add a live ISS ground track map using Leaflet.js
- Embed NASA APOD (Astronomy Picture of the Day) as a fifth dashboard section
- Add a 3D solar system using Three.js
- Add audio — space ambient background sound with a mute toggle
- Animate the chart bars on modal open for a smoother UX
- Show a user-facing error message if APIs fail instead of silent console logging
- Add a countdown timer to the next ISS pass over a user-selected location

---

## 👤 Author

**Rupam**
- Project: AstroViz — Space Mission Dashboard
- Tools: HTML, CSS, JavaScript, Chart.js, ISS API, Mars Weather API

---

> ⭐ If you found this project helpful, give it a star on GitHub!
