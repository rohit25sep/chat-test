import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const UsersStack = createNativeStackNavigator<UsersStackParamList>();

const firebaseConfig = {
  apiKey: "AIzaSyAnYfrIJSHg62JNE2EpyLrSNYzrtR3biPg",
  //authDomain: "test-1f9e2.firebaseapp.com",
  databaseURL: "https://chat-3f07f-default-rtdb.firebaseio.com/",
  projectId: "chat-3f07f",
  storageBucket: "chat-3f07f.appspot.com",
  messagingSenderId: "637150470743",
  appId: "1:637150470743:ios:be729712344210b73f3912",
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
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
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
