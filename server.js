const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

const PORT = 2000;

app.listen(PORT, async () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);

  const open = (await import("open")).default;
  open(`http://localhost:${PORT}`);
});
