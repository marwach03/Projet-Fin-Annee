const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
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

// Export the addMood function
module.exports = {
  addMood
};