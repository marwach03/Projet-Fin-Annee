import React, { useState, useEffect, useRef } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { FONTS } from "./constants/fonts";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { firebase } from './config'; // Ensure this is correctly configured
import GetStarted from "./screens/GetStarted";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Acceuil from "./screens/pageAcceuil";
import Humeur from "./screens/Mood/Humeur";
import Profile from "./screens/Profile";
import AddMood from "./screens/Mood/AddMood";
import ToDoList from "./screens/todolist/ToDoList";
import BottomTabNavigator from "./navigation/bottomTabNavigator";
import Citation from "./screens/Citations/citations";
import Work from "./screens/Citations/work";
import Succes from "./screens/Citations/succes";
import Friend from "./screens/Citations/friend";
import Stress from "./screens/Citations/stress";
import Mothers from "./screens/Citations/mothers";
import Departs from "./screens/Citations/departs";
import MeditationAcceuil from "./screens/Meditation/meditationAcceuil";
import MindClear from "./screens/Meditation/mindclear";
import BrightenDay from "./screens/Meditation/brightenDay";
import Breathing from "./screens/BreathingExercice/breathing";
import MoreConfident from "./screens/Meditation/moreConfident";
import Mindfulness from "./screens/Meditation/mindfulness";
import Sleep from "./screens/Sleep/BedtimeDial";
import Learning from "./screens/LearnigRessources/learning";
import Articles from "./screens/LearnigRessources/Articles/articles";
import Emotional from "./screens/LearnigRessources/Articles/emotionalParagraph";
import ParagraphOne from "./screens/LearnigRessources/Articles/pagrapheOne";
import ParagraphTwo from "./screens/LearnigRessources/Articles/paragrapheTwo";
import ParagraphThree from "./screens/LearnigRessources/Articles/paragrapheThree";
import ParagraphFour from "./screens/LearnigRessources/Articles/paragrapheFour";
import Psychology from "./screens/LearnigRessources/Articles/psychologyParagraph";
import ParagraphFive from "./screens/LearnigRessources/Articles/paragrapheFive";
import ParagraphSix from "./screens/LearnigRessources/Articles/paragrapheSix";
import ParagraphSeven from "./screens/LearnigRessources/Articles/paragrapheSeven";
import ParagraphEight from "./screens/LearnigRessources/Articles/paragrapheEight";
import Productivity from "./screens/LearnigRessources/Articles/productivityParagraph";
import ParagraphNine from "./screens/LearnigRessources/Articles/paragrapheNine";
import ParagraphTen from "./screens/LearnigRessources/Articles/paragrapheTen";
import ParagraphEleven from "./screens/LearnigRessources/Articles/paragrapheEleven";
import ParagraphTwelve from "./screens/LearnigRessources/Articles/paragrapheTwelve";
import Physical from "./screens/LearnigRessources/Articles/physicalParagraph";
import ParagraphThirteen from "./screens/LearnigRessources/Articles/paragrapheThirteen";
import ParagraphFourteen from "./screens/LearnigRessources/Articles/paragrapheFourteen";
import ParagraphFifteen from "./screens/LearnigRessources/Articles/paragrapheFifteen";
import ParagraphSixteen from "./screens/LearnigRessources/Articles/paragrapheSixteen";
import Motivation from "./screens/LearnigRessources/Affirmations/motivation";
import Focussing from "./screens/LearnigRessources/Affirmations/foccusing";
import ControlStress from "./screens/LearnigRessources/Affirmations/controlStress";
import Positivity from "./screens/LearnigRessources/Affirmations/positivity";
import SleepDurationChart from "./screens/Sleep/chartSleep";
import MoodChart from "./screens/Mood/chartMood";
import PodcastsAcceuil from "./screens/LearnigRessources/Podcasts/podcastsAcceuil";
import PositivityPodcast from "./screens/LearnigRessources/Podcasts/positivityPodcast";
import NeverGiveUpPodcast from "./screens/LearnigRessources/Podcasts/neverGiveUpPodcast";
import MorningPodcast from "./screens/LearnigRessources/Podcasts/morningPodcast";
import MondayPodcast from "./screens/LearnigRessources/Podcasts/mondayPodcast";
import ExercicesRelaxation from "./screens/LearnigRessources/ExercicesRelaxation/AccueilRelaxation";
import Minuteur from "./screens/LearnigRessources/ExercicesRelaxation/minuteur";
import Exercice from "./screens/LearnigRessources/ExercicesRelaxation/exercice";
const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    if (!initializing && user) {
      if (user.emailVerified) {
        navigationRef.current?.navigate("Acceuil");
      } else {
        navigationRef.current?.navigate("Login");
      }
    }
  }, [initializing, user]);

  const onLayoutRootView = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded || initializing) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={onLayoutRootView}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Acceuil" component={BottomTabNavigator} />
          <Stack.Screen name="Humeur" component={Humeur} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AddMood" component={AddMood} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
          <Stack.Screen name="Citation" component={Citation} />
          <Stack.Screen name="Work" component={Work} />
          <Stack.Screen name="Succes" component={Succes} />
          <Stack.Screen name="Friend" component={Friend} />
          <Stack.Screen name="Stress" component={Stress} />
          <Stack.Screen name="Mothers" component={Mothers} />
          <Stack.Screen name="Departs" component={Departs} />
          <Stack.Screen name="MeditationAcceuil" component={MeditationAcceuil} />
          <Stack.Screen name="MindClear" component={MindClear} />
          <Stack.Screen name="BrightenDay" component={BrightenDay} />
          <Stack.Screen name="MoreConfident" component={MoreConfident}/>
          <Stack.Screen name="Mindfulness" component={Mindfulness}/>
          <Stack.Screen name="Breathing" component={Breathing}/>
          <Stack.Screen name="Sleep" component={Sleep}/>
          <Stack.Screen name="Learning" component={Learning}/>
          <Stack.Screen name="Articles" component={Articles}/>
          <Stack.Screen name="Emotional" component={Emotional}/>
          <Stack.Screen name="ParagraphOne" component={ParagraphOne}/>
          <Stack.Screen name="ParagraphTwo" component={ParagraphTwo}/>
          <Stack.Screen name="ParagraphThree" component={ParagraphThree}/>
          <Stack.Screen name="ParagraphFour" component={ParagraphFour}/>
          <Stack.Screen name="Psychology" component={Psychology}/>
          <Stack.Screen name="ParagraphFive" component={ParagraphFive}/>
          <Stack.Screen name="ParagraphSix" component={ParagraphSix}/>
          <Stack.Screen name="ParagraphSeven" component={ParagraphSeven}/>
          <Stack.Screen name="ParagraphEight" component={ParagraphEight}/>
          <Stack.Screen name="Productivity" component={Productivity}/>
          <Stack.Screen name="ParagraphNine" component={ParagraphNine}/>
          <Stack.Screen name="ParagraphTen" component={ParagraphTen}/>
          <Stack.Screen name="ParagraphEleven" component={ParagraphEleven}/>
          <Stack.Screen name="ParagraphTwelve" component={ParagraphTwelve}/>
          <Stack.Screen name="Physical" component={Physical}/>
          <Stack.Screen name="ParagraphThirteen" component={ParagraphThirteen}/>
          <Stack.Screen name="ParagraphFourteen" component={ParagraphFourteen}/>
          <Stack.Screen name="ParagraphFifteen" component={ParagraphFifteen}/>
          <Stack.Screen name="ParagraphSixteen" component={ParagraphSixteen}/>
          <Stack.Screen name="Motivation" component={Motivation}/>
          <Stack.Screen name="Focussing" component={Focussing}/>
          <Stack.Screen name="ControlStress" component={ControlStress}/>
          <Stack.Screen name="Positivity" component={Positivity}/>
          <Stack.Screen name="SleepDurationChart" component={SleepDurationChart}/>
          <Stack.Screen name="MoodChart" component={MoodChart}/>
          <Stack.Screen name="PodcastsAcceuil" component={PodcastsAcceuil}/>
          <Stack.Screen name="PositivityPodcast" component={PositivityPodcast}/>
          <Stack.Screen name="NeverGiveUpPodcast" component={NeverGiveUpPodcast}/>
          <Stack.Screen name="MorningPodcast" component={MorningPodcast}/>
          <Stack.Screen name="MondayPodcast" component={MondayPodcast}/>
          <Stack.Screen name="ExercicesRelaxation" component={ExercicesRelaxation}/>
          <Stack.Screen name="Minuteur" component={Minuteur}/>
          <Stack.Screen name="Exercice" component={Exercice}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;