const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ignoreUndefinedProperties: true // Activer l'option pour ignorer les propriétés indéfinies
});


// Get a reference to the Firestore database
const db = admin.firestore();

async function addMood(moodData) {
  try {
    console.log("Deleting documents...");
    // Delete all documents in the "moods" collection
    const querySnapshot = await db.collection('moods').get();
    const deletePromises = querySnapshot.docs.map((doc) => doc.ref.delete());
    await Promise.all(deletePromises);
    console.log("Documents deleted.");

    // Add the new mood to the collection "moods"
    await db.collection('moods').add(moodData);
    console.log("Mood added to Firestore");
  } catch (error) {
    console.error('Error adding mood to Firestore:', error);
  }
}

async function collectEmoji() {
  try {
    // Obtenir la date actuelle
    const today = new Date();
    // Mettre la date au format ISOString (YYYY-MM-DD)
    const todayISOString = today.toISOString().split('T')[0]; // Gardez seulement la partie date de l'ISOString

    // Query Firestore pour obtenir un emoji pour la journée actuelle
    const querySnapshot = await db.collection('moods')
                                 .where('timestamp', '>=', `${todayISOString}T00:00:00`) // Début de la journée actuelle
                                 .where('timestamp', '<=', `${todayISOString}T23:59:59`) // Fin de la journée actuelle
                                 .limit(1)
                                 .get();

    // Vérifier si le document a été trouvé
    if (!querySnapshot.empty) {
      // Récupérer l'emoji à partir du premier document trouvé
      const moodData = querySnapshot.docs[0].data();
      const emoji = moodData.mood;
      return emoji;
    } else {
      // Si aucun document trouvé, retourner null
      return null;
    }
  } catch (error) {
    console.error('Error collecting emoji from Firestore:', error);
    throw error;
  }
}


async function saveSleepDurationToDatabase(duration) {
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

  try {
      // Supprimer les documents avec la date d'aujourd'hui
      const querySnapshot = await db.collection('sleepDurations')
          .where('date', '>=', startOfToday)
          .where('date', '<=', endOfToday)
          .get();

      // Supprimer les documents récupérés
      querySnapshot.forEach(async (doc) => {
          await doc.ref.delete();
          console.log('Document supprimé avec succès :', doc.id);
      });

      // Ajouter la nouvelle durée de sommeil à la collection sleepDurations
      await db.collection('sleepDurations').add({
          duration: duration,
          date: new Date() // Utiliser la date actuelle comme date d'enregistrement
      });

      console.log('Nouvelle durée de sommeil ajoutée avec succès dans Firestore');
  } catch (error) {
      console.error('Erreur lors de la manipulation de la base de données Firestore :', error);
      throw error;
  }
}


async function getSleepDurations() {
  try {
    // Récupérer tous les documents de la collection 'sleepDurations'
    const querySnapshot = await db.collection('sleepDurations').orderBy('date').get();
    
    // Convertir les documents en un tableau de données contenant uniquement la date et la durée de sommeil
    const sleepDurations = querySnapshot.docs.map(doc => ({
      date: doc.data().date.toDate(),
      duration: doc.data().duration,
    }));
    
    return sleepDurations;
  } catch (error) {
    console.error('Erreur lors de la récupération des durées de sommeil depuis Firestore:', error);
    throw error;
  }
}


module.exports = {
  addMood,
  collectEmoji,
  saveSleepDurationToDatabase,
  getSleepDurations // Exporter la nouvelle fonction
};

