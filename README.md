# Digital Kabilin – Home Page

React (Vite) home page for the Kalinga heritage website.

## Run on Windows 11
1. Install Node.js LTS from https://nodejs.org
2. Open the project folder in a terminal (PowerShell or VS Code)
3. `npm install`
4. `npm run dev` – opens at http://localhost:5173

## Images
Put your photos in `public/images/` using these names (until then a dark gradient shows):

| File | Section |
|------|---------|
| hero.jpg | Hero (right side) |
| intro-landscape.jpg | Introduction to Kalinga |
| community.jpg | 01 The Community |
| history.jpg | 02 History & Heritage |
| language.jpg | 03 Language & Knowledge |
| community-today.jpg | 04 Community Today |
| digital-heritage.jpg | 05 Digital Heritage |

Use real photos you have permission to use and cite each source.

## Structure
- `src/data/content.js` – all text, nav links, image paths
- `src/components/` – Navbar, Hero, Section, Footer, Logo, Arrow
- `src/styles/global.css` – colors, fonts, layout
