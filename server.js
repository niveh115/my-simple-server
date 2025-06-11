const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

console.log("Starting server...");

// Serve static files from the "public" folder
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "about.html"));
});

app.use((request, response) => {
  response.sendFile(path.join(__dirname, "public", "not-found.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started");
  console.log(`Server listening at port: http://localhost:${PORT}/`);
});
