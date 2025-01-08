// 1. Zainstaluj Node.js
// 2. Zainicjuj npm
// 3. Zainstaluj moduł express
// 4. Zainstaluj moduł nodemon
// 4. Zainstaluj moduł body-parser
// 5. Otwórz Serwer na Localhost:3000
// 6. Prezentuj stronę

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


