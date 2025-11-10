import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { StyleSheet } from 'react-native';
import './globals.css';

const tokenCache = {
  getToken: (key: string) => SecureStore.getItemAsync(key),
  saveToken: (key: string, value: string) =>
    SecureStore.setItemAsync(key, value),
};
export default function RootLayout() {
  return (
    <React.Fragment>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey='pk_test_dXNlZnVsLXJlaW5kZWVyLTQ2LmNsZXJrLmFjY291bnRzLmRldiQ'>
        <Stack screenOptions={{ headerShown: false }} />
      </ClerkProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
