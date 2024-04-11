import { useFonts } from "expo-font"; 
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { FONTS } from "./constants/fonts";
import React, { useState, useEffect } from "react";
import { firebase } from './config';
import GetStarted from "./screens/GetStarted";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Acceuil from "./screens/Acceuil";


const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

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
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="GetStarted">
          {user ? (
            <>
              <Stack.Screen name="Acceuil" component={Acceuil} />
            </>
          ) : (
            <>
            
              <Stack.Screen name="GetStarted" component={GetStarted} />
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
