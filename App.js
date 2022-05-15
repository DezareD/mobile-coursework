import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from 'react-native';

import RootNavigator from './src/navigation/RootNavigator';
import AuthProvider from './src/auth/AuthProvider'

import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <StatusBar StatusBarStyle='light-content' />
        <RootNavigator />
      </NativeBaseProvider>
    </AuthProvider>
  );
}