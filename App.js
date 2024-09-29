// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { enableScreens } from 'react-native-screens';

// Import your Firebase configuration
import { auth, firestore } from './firebase';

// Import screen components from the screens folder
import BookingScreen from './screens/Booking';
import ListingsScreen from './screens/Listings';
import AddBookingsScreen from './screens/AddBookings';
import StatsScreen from './screens/Stats';
import AccountScreen from './screens/Account';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Booking') {
            iconName = 'calendar';
          } else if (route.name === 'Listings') {
            iconName = 'format-list-bulleted';
          } else if (route.name === 'Add Booking') {
            iconName = 'plus-box';
          } else if (route.name === 'Stats') {
            iconName = 'chart-bar';
          } else if (route.name === 'Account') {
            iconName = 'account';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null],
      })}
    >
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Listings" component={ListingsScreen} />
      <Tab.Screen name="Add Booking" component={AddBookingsScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <MainStack.Screen name="MainApp" component={MainApp} />
          ) : (
            <MainStack.Screen name="Auth">
              {() => <AuthStackScreen setIsSignedIn={setIsSignedIn} />}
            </MainStack.Screen>
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function AuthStackScreen({ setIsSignedIn }) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn">
        {props => <SignInScreen {...props} setIsSignedIn={setIsSignedIn} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}