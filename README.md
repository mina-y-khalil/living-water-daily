<p align="center">
  <img src="https://redeem-innovations.com/wp-content/uploads/2025/09/Living-Water-Daily01.png" alt="Landing Page 1" />
</p>

<p align="center">
  <img src="https://redeem-innovations.com/wp-content/uploads/2025/09/Living-Water-Daily02.png" alt="Landing Page 2" />
</p>

# Living Water Daily

A simple Express + EJS web app that serves a **random NKJV Bible verse** based on the user’s selected **feeling** (Joy, Peace, Hope, etc.). Built to be clean, fast, and easy to extend.

## ✨ Features

- Pick a feeling → get a matching **random verse** from NKJV.
- “Surprise Me” option pulls from **all** feelings.
- Responsive UI with a full-width verse area and a grid of buttons.
- Accessible button group with semantic attributes.
- EJS templating with safe checks for optional data.

## 🧰 Tech Stack

- **Node.js / Express**
- **EJS** (server-side views)
- **CSS** (vanilla; custom layout)
- **Static assets** served from `/public`

## 📁 Project Structure

```
living-water-daily/
├─ public/                 # static assets (CSS, images, JS)
├─ views/
│  ├─ index.ejs
│  ├─ about.ejs
│  ├─ contact.ejs
│  └─ partials/
│     ├─ header.ejs
│     └─ footer.ejs
├─ verses.js               # feelings → array of { ref, text }
├─ index.js                # Express app (routes, server)
└─ README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ recommended
- **npm** (bundled with Node)

### Install

```bash
npm install
```

### Run

```bash
node index.js
# Server running on http://localhost:3000
```

Open `http://localhost:3000` in your browser.

## 🔌 Routes

### GET `/`

Renders the home page. If no verse is passed, shows a welcome message.

### GET `/verse?feeling=<name>`

Returns the home page with a **random verse** for the requested feeling.

- Example:  
  `/verse?feeling=joy` → picks a random verse from `verses.joy`
- If `feeling` is missing/unknown, it falls back to a **random verse from all** feelings.

### GET `/about` / `/contact`

Static pages rendered with EJS.

## 📦 `verses.js` Format

Export a default object keyed by feeling:

```js
// verses.js
export default {
  joy: [
    {
      ref: "Nehemiah 8:10",
      text: "Do not sorrow, for the joy of the Lord is your strength.",
    },
    // ...
  ],
  peace: [
    /* ... */
  ],
  // add more feelings...
};
```

## 🎨 Styling Notes

- The **verse area** is full-bleed and responsive; long verses clamp to a few lines so buttons stay visible.
- The **feelings** grid is responsive with compact buttons.
- To tweak spacing or clamp length, adjust the `.verse-text` CSS (`-webkit-line-clamp`).

## ♿ Accessibility

- Buttons are grouped with `role="group"` and `aria-label`.
- Clear focus styles recommended (add outline/box-shadow on `:focus-visible`).
- Use semantic text for verse and reference.

## 🛡️ Content & Usage

- Verses are from the **NKJV** Bible.
- This project is intended for **personal / devotional use**.

## 📤 Deployment

- Works on Render, Railway, Heroku, or any Node host.
- Ensure static files are in `/public` and the Node entry is `index.js`.

## 🧩 Roadmap / Ideas

- “Show more” toggle for long verses.
- Persist last selected feeling (cookie/localStorage).
- Shareable verse links and copy-to-clipboard.
- Dark mode.

## 🤝 Contributing

PRs welcome for:

- Additional verses
- Accessibility improvements
- UI/UX polish
