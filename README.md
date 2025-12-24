# Course-Front-End-Development-Daniil-Feoktistov
Software Development Skills
# Author Daniil Feoktistov

# GameWorld — Game Store Website (Frontend)
A simple responsive game store website built with HTML, CSS, and a little bit JavaScript.  
Includes a fixed header with a mobile hamburger menu, a game catalog grid, an FAQ accordion, and a footer.

# Features
1) Responsive header
  - Logo + navbar + icons on desktop
  - Hamburger menu on tablets/phones (≤ 900px) that reveals hidden icons
  - Header smoothly moves down while scrolling
2) Catalog grid
  - Responsive layout (4 → 3 → 2 → 1 columns depending on screen size)
  - Equal-sized covers using `aspect-ratio` + `object-fit: cover`
  - Hover zoom effect on images
3) FAQ section
  - Accordion behavior using `<details>` / `<summary>`
  - Smooth open/close animation
  - “Only one open at a time” behavior via JavaScript
4) Footer
  - Link columns and payment icons
  - Responsive stacking on smaller screens

# Tech Stack
- HTML5
- CSS3
- JavaScript

# Project Structure
When downloading files, it is important to download everything and install it in a specific structure!
Structure below

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
