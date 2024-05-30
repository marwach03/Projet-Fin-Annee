import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Audio, Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

class MondayPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: null,
      isPlaying: false,
      playbackPosition: 0,
      duration: 0,
      isVideoMuted: true,
      secondSound: null,
      isSecondSoundPlaying: false,
      selectedSoundIndex: 0,
      modalVisible: false // état pour contrôler la visibilité du menu
    };
  }

  async componentDidMount() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/MondayMotivation.wav')
    );
    const status = await sound.getStatusAsync();
    this.setState({ sound, duration: status.durationMillis });
    sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
  }

  componentWillUnmount() {
    this.pauseSound();
    this.pauseSecondSound();
    const { sound, secondSound } = this.state;
    if (sound) {
      sound.setOnPlaybackStatusUpdate(null);
    }
    if (secondSound) {
      secondSound.setOnPlaybackStatusUpdate(null);
    }
  }

  onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && !status.isPlaying) {
      this.setState({ playbackPosition: status.positionMillis });
    }
  };

  async playSound() {
    const { sound, playbackPosition } = this.state;
    await sound.playFromPositionAsync(playbackPosition);
    this.setState({ isPlaying: true });
    this.playbackInterval = setInterval(() => {
      this.updatePlaybackPosition();
    }, 500);
  }

  async pauseSound() {
    const { sound } = this.state;
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && status.isPlaying) {
        const playbackPosition = status.positionMillis;
        await sound.pauseAsync();
        this.setState({ playbackPosition, isPlaying: false });
        clearInterval(this.playbackInterval);
      }
    }
  }

  async playSecondSound() {
    const { secondSound } = this.state;
    if (secondSound) {
      await secondSound.playAsync();
      this.setState({ isSecondSoundPlaying: true });
    }
  }

  async pauseSecondSound() {
    const { secondSound } = this.state;
    if (secondSound) {
      await secondSound.pauseAsync();
      this.setState({ isSecondSoundPlaying: false });
    }
  }

  

  updatePlaybackPosition() {
    const { sound } = this.state;
    if (sound) {
      sound.getStatusAsync().then((status) => {
        if (status.isLoaded && status.isPlaying) {
          this.setState({ playbackPosition: status.positionMillis });
        }
      });
    }
  }

  handleProgressBarPress = (event) => {
    const { duration } = this.state;
    const positionX = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    const progressBarWidth = screenWidth * 0.9;
    const newPosition = (positionX / progressBarWidth) * duration;
    this.setState({ playbackPosition: newPosition });
    if (!this.state.isPlaying) {
      this.playSoundFromPosition(newPosition);
    } else {
      this.seekSoundToPosition(newPosition);
    }
  };

  async playSoundFromPosition(position) {
    const { sound } = this.state;
    if (sound) {
      await sound.playFromPositionAsync(position);
      this.setState({ isPlaying: true });
    }
  }

  async seekSoundToPosition(position) {
    const { sound } = this.state;
    if (sound) {
      await sound.setPositionAsync(position);
    }
  }

  toggleVideoSound = () => {
    this.setState(prevState => ({ isVideoMuted: !prevState.isVideoMuted }));
  }

  render() {
    const { isPlaying, duration, playbackPosition, isVideoMuted, isSecondSoundPlaying, soundList, selectedSoundIndex, modalVisible } = this.state;
    const progress = duration > 0 ? (playbackPosition / duration) * 100 : 0;

    return (
      <View style={styles.container}>
        <Video
          source={require('../../../assets/back12.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={isVideoMuted}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={StyleSheet.absoluteFill}
        />
        {duration > 0 && (
          <Text style={styles.minutesText}>
            {this.convertMillisToMinutes(playbackPosition)} / {this.convertMillisToMinutes(duration)}
          </Text>
        )}
        <TouchableOpacity
          style={styles.progressBar}
          onPress={this.handleProgressBarPress}
        >
          <View style={[styles.progressIndicator, { width: `${progress}%` }]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={isPlaying ? () => this.pauseSound() : () => this.playSound()}
        >
          {isPlaying ? (
            <Ionicons name="pause" size={24} color="white" />
          ) : (
            <Ionicons name="play" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.soundButton}
          onPress={this.toggleVideoSound}
        >
          {isVideoMuted ? (
            <Ionicons name="volume-mute" size={24} color="white" />
          ) : (
            <Ionicons name="volume-high" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  convertMillisToMinutes(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#135D66',
    padding: 10,
    borderRadius: 25,
    marginTop: 30,
    marginBottom: 100,
    marginLeft: 250,
  },
  progressBar: {
    width: '90%',
    height: 5,
    backgroundColor: '#CCCCCC',
    marginTop: 20,
    marginBottom: -15,
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: '#135D66',
  },
  minutesText: {
    color: 'white',
  },
  soundButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#135D66',
    padding: 10,
    borderRadius: 25,
  },
  secondSoundButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: '#135D66',
    padding: 10,
    borderRadius: 25,
  },
  soundListContainer: {
    flexDirection: 'column',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  soundListItem: {
    backgroundColor: '#135D66',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedSoundListItem: {
    backgroundColor: '#2CA58D',
  },
  soundListItemText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MondayPodcast;
