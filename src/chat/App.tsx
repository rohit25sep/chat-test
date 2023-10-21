import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
  ChatScreen,
  LoginScreen,
  RegisterScreen,
  RoomsScreen,
  UsersScreen,
} from "./screens";
import {
  AuthStackParamList,
  MainStackParamList,
  RootStackParamList,
  UsersStackParamList,
} from "./types";
import { firebase } from "@react-native-firebase/auth";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const UsersStack = createNativeStackNavigator<UsersStackParamList>();

const firebaseConfig = {
  apiKey: "AIzaSyDpKlp168biX_Vr54_q1fhAwX3QutUKLpc",
  authDomain: "test-1f9e2.firebaseapp.com",
  databaseURL: "https://test-1f9e2-default-rtdb.firebaseio.com",
  projectId: "test-1f9e2",
  storageBucket: "test-1f9e2.appspot.com",
  messagingSenderId: "679443517609",
  appId: "1:679443517609:web:a99a00b741ccee1b3519b8",
  measurementId: "G-FLRC1GQ13W",
};

 firebase.initializeApp(firebaseConfig);
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Rooms">
      <MainStack.Screen name="Chat" component={ChatScreen} />
      <MainStack.Screen name="Rooms" component={RoomsScreen} />
    </MainStack.Navigator>
  );
};

const UsersStackNavigator = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
    </UsersStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{ presentation: "modal" }}
        />
        <RootStack.Screen name="Main" component={MainStackNavigator} />
        <RootStack.Screen
          name="UsersStack"
          component={UsersStackNavigator}
          options={{ presentation: "modal" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
