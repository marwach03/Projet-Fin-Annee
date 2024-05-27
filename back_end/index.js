const express = require('express');
const { addMood, collectEmoji } = require('./firebase');
const { saveSleepDurationToDatabase, getSleepDurations, getMoodData } = require('./firebase');


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

// Route pour enregistrer la durée de sommeil
app.post('/enregistrer-duree-sommeil', async (req, res) => {
  const { duration } = req.body; // Destructuring pour obtenir la durée directement
  try {
    await saveSleepDurationToDatabase(duration); // Passer seulement la durée
    res.status(200).send('Durée de sommeil enregistrée avec succès dans Firestore.');
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la durée de sommeil dans Firestore :", error);
    res.status(500).send('Erreur lors de l\'enregistrement de la durée de sommeil dans Firestore');
  }
});


app.get('/sleep-durations', async (req, res) => {
  try {
    // Appeler la fonction pour récupérer les durées de sommeil depuis Firestore
    const sleepDurations = await getSleepDurations();
    
    // Envoyer les durées de sommeil au client
    res.status(200).json(sleepDurations);
  } catch (error) {
    console.error('Erreur lors de la récupération des durées de sommeil:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des durées de sommeil depuis Firestore' });
  }
});

// Route pour récupérer les données de mood
app.get('/mood-data', async (req, res) => {
  try {
    // Appeler la fonction pour récupérer les données de mood depuis Firestore
    const moodData = await getMoodData();
    
    // Envoyer les données de mood au client
    res.status(200).json(moodData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de mood:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données de mood depuis Firestore' });
  }
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
