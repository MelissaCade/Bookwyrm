const express = require("express");

const app = express();
const PORT = 3000;
app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "BookWyrm server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});