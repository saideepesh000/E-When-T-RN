import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';


import EventsScreen from '../Screens/EventsScreen';
import EventFormScreen from '../Screens/EventFormScreen';
import EventCard from '../components/EventCard/index';
import EventDetailedScreen from '../Screens/EventDetailedScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// <Stack.Screen
      //   name="auth"
      //   component={AuthNavigator}
      //   options={{ headerShown: false }}
      // />

function MainNavigator() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="home" component={EventsScreen} />
      <Stack.Screen name="create" component={EventFormScreen} />
      <Stack.Screen
        name="EventDetailedScreen"
        component={EventDetailedScreen}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;