import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Emoji = ({ emoji }) => <Text style={styles.emojiText}>{emoji}</Text>;

const AddMood = () => {
  const [selectedMood, setSelectedMood] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleEmojiPress = (mood, index) => {
    setSelectedMood(mood);
    setSelectedIndex(index);
  };

  const emojis = [
    { emoji: <Emoji emoji="⊗" />, mood: '~  ~' },
    { emoji: <Emoji emoji="🙂" />, mood: '~ Slightly ~' },
    { emoji: <Emoji emoji="🥹   " />, mood: '~ Back tears ~' },
    { emoji: <Emoji emoji="😌" />, mood: '~ Relieved ~' },
    { emoji: <Emoji emoji="😄" />, mood: '~ Happy ~' },
    { emoji: <Emoji emoji="🥰" />, mood: '~ Love ~' },
    { emoji: <Emoji emoji="🤪" />, mood: '~ Zany ~' },
    { emoji: <Emoji emoji="🤓" />, mood: '~ Education ~' },
    { emoji: <Emoji emoji="😇" />, mood: '~ Liked ~' },
    { emoji: <Emoji emoji="😒" />, mood: '~ Unamused ~' },
    { emoji: <Emoji emoji="😞" />, mood: '~ Disapointed ~' },
    { emoji: <Emoji emoji="😟" />, mood: '~ Anguished ~' },
    { emoji: <Emoji emoji="🥳" />, mood: '~ Partying ~' },
    { emoji: <Emoji emoji="😕" />, mood: '~ Confused ~' },
    { emoji: <Emoji emoji="☹" />, mood: '~ Frowning ~' },
    { emoji: <Emoji emoji="😫" />, mood: '~ Tired ~' },
    { emoji: <Emoji emoji="😔" />, mood: '~ Pensive ~' },
    { emoji: <Emoji emoji="😢" />, mood: '~ Crying ~' },
    { emoji: <Emoji emoji="😡" />, mood: '~ Angry ~' },
    { emoji: <Emoji emoji="🤔" />, mood: '~ Thinking ~' },
    { emoji: <Emoji emoji="🤧" />, mood: '~ Sick ~' },
    { emoji: <Emoji emoji="😴" />, mood: '~ Sleeping ~' },
    { emoji: <Emoji emoji="😑" />, mood: '~ Expressionless ~' },
    { emoji: <Emoji emoji="🤯" />, mood: '~ Exploding head ~' },
    // Add more emojis here
  ];

  // Get the current date
  const currentDate = new Date();
  
  // Format the current date
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View>
      {/* Header showing the current date */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{formattedDate}</Text>
      </View>

      {/* Emoji selection */}
      <View style={styles.container}>
        {emojis.map(({ emoji, mood }, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.emojiContainer, index === selectedIndex && styles.selectedEmoji]}
            onPress={() => handleEmojiPress(mood, index)}
          >
            {emoji}
          </TouchableOpacity>
        ))}
        {selectedMood !== '' && (
          <Text style={styles.selectedMoodText}>{selectedMood}</Text>
        )}
      </View>
      
      {/* Validation button */}
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.TextValider}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    marginTop: windowHeight * 0.08,
    marginBottom: windowHeight * 0.04,
    alignItems: 'center',
    marginBottom:7.5,
  },
  headerText: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    marginTop:-24,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  emojiContainer: {
    flexBasis: '25%',
    aspectRatio: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  emojiText: {
    fontSize: windowHeight * 0.04,
  },
  selectedEmoji: {
    borderRadius: 10,
    backgroundColor:'#008080',
    width:5,
  },
  selectedMoodText: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button1: {
    marginTop: windowHeight * 0.9,
    marginLeft: windowWidth * 0.2,
    padding: 10,
    paddingLeft: windowWidth * 0.25,
    paddingRight: windowWidth * 0.25,
    backgroundColor: "#008080",
    borderRadius: 10,
    position: 'absolute',
  },
  TextValider: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  }
});

export default AddMood;