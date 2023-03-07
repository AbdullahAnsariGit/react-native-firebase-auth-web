import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './android/app/src/Home';
import Signup from './android/app/src/Signup';
import Login from './android/app/src/Login';
import Forgotpassword from './android/app/src/Forgotpassword';
import {auth} from './firebase/firebase.config';
import Dashboard from './android/app/src/Dashboard';
import {firebase} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
