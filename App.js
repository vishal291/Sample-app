import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TrackingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tracking!</Text>
    </View>
  );
}

function QCScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>QC!</Text>
    </View>
  );
}

function AccountScreen() {
	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Account!</Text>
	  </View>
	);
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="QC" component={QCScreen} />
	  <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

