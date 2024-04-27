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


module.exports = {
  addMood,
  collectEmoji
};
