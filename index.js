import express from "express";
import bodyParser from "body-parser";
import verses from "./verses.js";

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from the "public" directory


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});


app.get('/verse', (req, res) => {
  const feeling = req.query.feeling; // comes from ?feeling=joy etc.
  let randomVerse;

  if (feeling && verses[feeling]) {
    const list = verses[feeling];
    const randomIndex = Math.floor(Math.random() * list.length);
    randomVerse = list[randomIndex];
  } else {
    // fallback: pick random from all feelings
    const allVerses = Object.values(verses).flat();
    const randomIndex = Math.floor(Math.random() * allVerses.length);
    randomVerse = allVerses[randomIndex];
  }

  res.render("index.ejs", { verse: randomVerse });
} );




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
