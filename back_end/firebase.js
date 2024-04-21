const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ignoreUndefinedProperties: true // Activer l'option pour ignorer les propriétés indéfinies
});


// Get a reference to the Firestore database
const db = admin.firestore();

// Function to add a mood to Firestore
async function addMood(moodData) {
  try {
    // Add the mood to the "moods" collection
    await db.collection('moods').add(moodData);

    console.log('Mood added to Firestore');
  } catch (error) {
    console.error('Error adding mood to Firestore:', error);
  }
}

async function collectEmoji() {
  try {
    // Query Firestore pour obtenir un emoji (sans condition)
    const querySnapshot = await db.collection('moods').limit(1).get();

    // Vérifier si le document a été trouvé
    if (!querySnapshot.empty) {
      // Récupérer l'emoji à partir du premier document trouvé
      const moodData = querySnapshot.docs[0].data();
      const emoji = moodData.mood;
      return emoji;
    } else {
      // Si aucun document trouvé, retourner null ou une erreur
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
