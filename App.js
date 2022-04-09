import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Signin from './pages/Signin'

export default function App() {
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </>
  );
}
