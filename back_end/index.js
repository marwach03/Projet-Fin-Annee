const express = require('express');
const { addMood, collectEmoji } = require('./firebase');

const app = express();
const port = 3000;

app.use(express.json());

// Route pour enregistrer un mood
app.post('/enregistrer-mood', async (req, res) => {
  const moodData = req.body;
  try {
    await addMood(moodData);
    res.status(200).send('Mood enregistré avec succès dans Firestore.');
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du mood dans Firestore :", error);
    res.status(500).send('Erreur lors de l\'enregistrement du mood dans Firestore');
  }
});
// Route pour collecter l'emoji
app.get('/collect-emoji', async (req, res) => {
  try {
    // Récupérer l'emoji depuis la collection moods
    const emoji = await collectEmoji();
    if (emoji) {
      res.status(200).json({ emoji });
    } else {
      res.status(404).json({ error: "Aucun emoji trouvé." });
    }
  } catch (error) {
    console.error("Erreur lors de la collecte de l'emoji :", error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
