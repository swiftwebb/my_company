import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React build
app.use(express.static("build")); // or "public" if using Vite

// Serve sitemap.xml with correct headers
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.resolve("public/sitemap.xml"));
});

// Serve robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.sendFile(path.resolve("public/robots.txt"));
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html")); // or public/index.html
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
