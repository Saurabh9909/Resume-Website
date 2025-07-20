Here’s a comprehensive **Frontend PRD (Product Requirements Document)** to build your **personal profile website** using **React.js + Tailwind CSS + Vite**, with modern design standards, mobile-first responsiveness, and a strong developer portfolio layout.

---

# 🧾 Product Requirements Document

### 📌 Project: Personal Profile Website (React.js + Tailwind CSS + Vite)

**Platform**: Web (Responsive for mobile, tablet, and desktop)

---

## 1. 🎯 Purpose & Goals

To create a professional, modern, and visually appealing personal portfolio website that:

* Showcases your **bio**, **skills**, **projects**, **experience**, and **contact** info.
* Is **mobile-first**, fast, and easy to maintain.
* Reflects your **developer identity** with clean, readable UI using **Tailwind CSS** and optimized via **Vite**.

---

## 2. 🎨 Tech Stack & Tools

* **Framework**: `React.js (with functional components)`
* **Bundler**: `Vite`
* **Styling**: `Tailwind CSS`
* **Fonts**: Google Fonts – `Inter`, `Poppins`, or `DM Sans`
* **Color Palette** (Dark Mode Preferred):

| Color Use         | Color Code | Name       |
| ----------------- | ---------- | ---------- |
| Primary           | `#6366F1`  | Indigo-500 |
| Secondary         | `#F59E0B`  | Amber-500  |
| Background (Dark) | `#0F172A`  | Slate-900  |
| Card / Surface    | `#1E293B`  | Slate-800  |
| Text Primary      | `#F8FAFC`  | Slate-50   |
| Text Secondary    | `#94A3B8`  | Slate-400  |

---

## 3. 🧱 Pages & Components Structure

### A. **Homepage**

* Hero Section (Name, Title, Tagline, CTA buttons)
* Short About Me with profile photo
* Social Links (GitHub, LinkedIn, Resume)

### B. **About Page**

* Extended Bio
* Experience Summary
* Tech Stack Display (icons / badges)

### C. **Projects Page**

* List of Projects
* Each Project Card:

  * Title, Description, Tech Used, Live Link, GitHub Link

### D. **Resume Page**

* Timeline UI for Experience & Education
* Skills grouped by type
* Download Resume button

### E. **Contact Page**

* Contact Form (name, email, message)
* Email link
* Social Icons

---

## 4. 🔧 Components

| Component Name    | Description                                    |
| ----------------- | ---------------------------------------------- |
| `<Navbar />`      | Sticky top, logo + nav links, mobile hamburger |
| `<Footer />`      | Social links, copyright                        |
| `<Button />`      | Reusable with variants (primary/secondary)     |
| `<Card />`        | Used for Projects, Skills, Timeline            |
| `<Form />`        | Contact form with validation                   |
| `<ThemeToggle />` | Dark/Light mode switch (optional)              |

---

## 5. 📱 Responsive & Mobile UX

* Mobile-first design
* Hamburger menu for nav
* Flex/grid layout adapts via Tailwind's breakpoints
* Touch-friendly buttons
* Scroll snap on section pages

---

## 6. 🧪 Performance & SEO

* Vite optimization for fast dev builds
* Use `<Helmet>` or `react-helmet` for meta info
* Accessible components (`aria`, alt tags, etc.)
* Lighthouse score goal: 90+

---

## 7. 🧩 Optional Features

* Blog Section (Markdown or CMS integration)
* Theme toggle (light/dark)
* Animation with `framer-motion` or `react-spring`
* Project filtering by tech stack

---

## 8. 📦 Directory Structure

```
/src
  /assets        → images, icons
  /components    → Navbar, Footer, Button, Card, etc.
  /pages         → Home.jsx, About.jsx, Projects.jsx, etc.
  /data          → projects.js, skills.js (for dynamic loading)
  App.jsx
  main.jsx
```

---

## 9. ✅ Font Setup (Google Fonts via Tailwind)

In `tailwind.config.js`:

```js
extend: {
  fontFamily: {
    sans: ['Poppins', 'sans-serif'], // or Inter, DM Sans
  },
}
```

Import in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

---

## 10. 🚀 Setup Instructions

```bash
npm create vite@latest my-profile --template react
cd my-profile
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure Tailwind in `tailwind.config.js` and use the default purge/content paths.

---

Would you like me to generate the initial `tailwind.config.js`, `vite.config.js`, and folder boilerplate for faster kick-off?
