import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function messages() {
  return (
    <SafeAreaView className='flex-1 items-center  dark:bg-gray-900 light:bg-white px-4'>
      <Text className='dark:text-white'>Messages</Text>
    </SafeAreaView>
  );
}
