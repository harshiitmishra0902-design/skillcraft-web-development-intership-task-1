## Responsive Navigation Menu

## 📄 Overview

This project is a sleek, dark-themed, single-page application built using pure, semantic HTML5, modern CSS3 (featuring custom properties and backdrop blur mechanics), and native JavaScript. Designed as part of the Skillcraft Web Technology Internship, the application delivers a seamless user experience by shifting themes dynamically based on the user's focus viewport.

## ✨ Features

*   **Dynamic Theme Matching:** Every section features its own unique background gradient paired with a corresponding colored UI highlight.
*   **Intelligent Scrollspy Integration:** Built using the native JavaScript `IntersectionObserver` API to track scroll depth efficiently and toggle `.active` link classes without viewport lagging.
*   **Frosted Glass Navbar:** The fixed navigation capsule utilizes modern `backdrop-filter: blur()` effects for an ultra-premium UI aesthetic.
*   **Custom CSS Properties:** The styling applies CSS variables (`--accent` and `--bg`) mapped directly to specific element IDs to dynamically adjust text and background interaction layers on hover.
*   **Smooth Navigation Physics:** Native `scroll-behavior: smooth` configurations provide smooth transitioning jumps when navigation items are clicked.

*   ## 🧠 Simple & Easy Functionality Explanation

How does the magic under the hood actually work? Here is a breakdown in plain language:

*   **The Look (HTML/CSS):** The webpage is built as one long scrolling wall divided into distinct visual blocks (`<section>`). The navigation bar stays pinned to the top of your screen (`position: fixed`).
*   **The Brains (JavaScript):** Instead of forcing the computer to constantly guess where you are while scrolling, the script sets up a digital radar system called an **Intersection Observer**. 
*   **The Switch:** As soon as a section crosses into your main view screen, this radar catches it, looks up the corresponding button name in the navigation bar, removes the highlight from the old page name, and glows the new page button instantly.

*   ## 🛠️ Technologies Used

*   **HTML5:** Structured semantic markup using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements.
*   **CSS3 Flexbox:** Deployed heavily across sections, headers, and navigation bars to provide predictable layouts.
*   **Modern CSS Styling:** Utilizes custom properties, absolute/fixed layout positioning, transitions, CSS gradients, and backdrop blurs.
*   **Vanilla JavaScript (ES6):** Runs a high-performance `IntersectionObserver` instance that updates states cleanly based on spatial tracking constraints.

*   ## 📂 Project Structure
├── index.html         # Main entry point (HTML skeleton structures)
├── style.css          # Global styling rules, themes, animations, and variables
├── script.js          # IntersectionObserver logic and active state tracking
└── README.md          # Project documentation and specifications

*   ## ✒️ Author

* **Harshit Mishra**
* *Developed as a responsive web design project using HTML, CSS, and JavaScript for the SkillCraft Technology Web Development Internship.*
