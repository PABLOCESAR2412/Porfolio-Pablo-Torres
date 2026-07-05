# ⚡ Pablo Torres - Full Stack Developer Portfolio

Welcome to the source code of my personal portfolio! This is a lightning-fast, static web application built with a **Brutalist / Technical aesthetic**, inspired by data streams, terminal consoles, and modern minimalist design. 

## 🛠️ Technology Stack

- **Framework:** [Astro](https://astro.build/) - For blazing-fast static site generation (SSG) and zero-JS by default.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS for building the brutalist UI.
- **Language:** TypeScript
- **Forms:** AJAX integration with FormSubmit.

## ✨ Key Features

- **Brutalist Aesthetic:** Monospaced fonts, sharp borders, high-contrast monochrome tones, and subtle CRT/bitmap noise overlays.
- **i18n (Internationalization):** Fully bilingual (Spanish / English) architecture built seamlessly into Astro routes.
- **Advanced Theming:** Perfect Dark/Light mode switching with meticulously synced CSS transitions (`duration-300`).
- **Accessibility & Customization:** Includes a custom widget to dynamically scale font sizes (A-, A, A+, A++) across the entire site using `rem` scaling.
- **Functional Contact Form:** Seamless AJAX form submission powered by FormSubmit, directly routed to email without captchas or redirects.
- **Performance:** Optimized LCP, deferred scripts, and efficient image loading.

## 🚀 Running Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PABLOCESAR2412/Porfolio-Pablo-Torres.git
   cd Porfolio-Pablo-Torres
   ```

2. **Install dependencies:**
   Using [Bun](https://bun.sh/) (recommended) or npm:
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```
   The site will be available at `http://localhost:4321`.

## 📂 Project Structure

- `/src/pages/`: Contains the Astro routes (`index.astro` for ES, `/en/index.astro` for EN).
- `/src/components/`: Modular UI components (Hero, Projects, Skills, Experience, Contact).
- `/src/layouts/`: Global layouts including the Sidebar navigation and system controls.
- `/src/i18n/`: Translation dictionaries (`ui.ts`).
- `/src/styles/`: Global CSS and Tailwind directives.

## 📄 License

This project is open-source and available under the MIT License. Feel free to draw inspiration from the design!

---
*SYS. STATUS: ONLINE // BUILD 001.0*
