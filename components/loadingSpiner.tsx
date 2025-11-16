import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function LoadingSpiner() {
  return (
    <View className='flex-1 bg-background-dark justify-center items-center'>
      <ActivityIndicator
        size='large'
        color='#6366f1'
      />
      <Text className='text-text-dark mt-3 text-base'>جاري تحميل ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
