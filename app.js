const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

function change(file, content) {
  fs.writeFileSync(file, content);
}

app.post("/change", (req, res) => {
  const file = req.body.file;
  const content = req.body.content;

  change("public/"+file, content);

  res.send("File updated");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});