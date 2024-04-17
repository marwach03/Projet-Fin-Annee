import React from "react";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Acceuil from "../screens/Acceuil";
import Humeur from "../screens/Humeur";
import Profile from "../screens/Profile";
import CustomTabBarButton from "../components/CustomTabBarButton";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false , tabBarStyle: styles.tabBarStyle}}
    >
      <Tab.Screen 
        name="Acceuil" 
        component={Acceuil} 
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} icon={require('../icones/acceuil.png')} />,
        }}
      />
      <Tab.Screen 
        name="Humeur" 
        component={Humeur} 
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} icon={require('../icones/add.png')} />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} icon={require('../icones/profile.png')} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    elevation: 0,
    borderTopWidth: 0,
    bottom: 10,
    right: 10,
    left: 10,
  },
  tabBarButton:{
    
  },
});

export default BottomTabNavigator;
