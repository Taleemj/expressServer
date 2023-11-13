const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use((req, res, next) => {
  // Set the Access-Control-Allow-Origin header to allow all origins.
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Serve the PDF and DOCX files
app.get("/test.pdf", (req, res) => {
  const pdfPath = path.join(__dirname, "docs/test.pdf");
  fs.createReadStream(pdfPath).pipe(res);
});

app.get("/test.docx", (req, res) => {
  const docxPath = path.join(__dirname, "docs/test.docx");
  fs.createReadStream(docxPath).pipe(res);
});

app.get("/resume.pdf", (req, res) => {
  const docxPath = path.join(__dirname, "docs/resume.pdf");
  fs.createReadStream(docxPath).pipe(res);
});

// Serve the image.png file
app.get("/testimage.jpg", (req, res) => {
  const imagePath = path.join(__dirname, "docs/testimage.jpg");
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
