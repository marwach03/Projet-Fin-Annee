const express = require('express');
const { enregistrerMood, addMood } = require('./firebase');

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

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
