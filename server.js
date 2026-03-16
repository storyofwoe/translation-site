import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

// parse incoming application/json requess
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

const dictionary = {
  hello: { fr: "bonjour", es: "hola", de: "hallo", nl: "hallo", jp: "こんにちは" },
  goodbye: { fr: "au revoir", es: "adiós", de: "tschüss", nl: "tot ziens", jp: "さよなら" },
  thanks: { fr: "merci", es: "gracias", de: "danke", nl: "dank je", jp: "ありがとう" }
}

const languages = Object.keys(dictionary.hello)

app.post("/translate", (request, response) => {
  console.log("POST /translate called with", request.body)
  const word = request.body.word
  const lang = request.body.lang

  if (dictionary[word] == undefined || dictionary[word][lang] == undefined) {
    return response.status(400).json({error : "Word or language not found in database"})
  }

  response.status(200).json({
    "translated" : dictionary[word][lang]
  })
})

app.get("/languages", (request, response) => {
  console.log("GET /languages called")
  response.json(languages)
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
