import Header from '@/components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomersPage from '../../../components/Customers';
import SuppliersPage from '../../../components/Suppliers';

const TopTab = createMaterialTopTabNavigator();

export default function Customers() {
  return (
    <SafeAreaView className='flex-1 bg-background-dark'>
      {/* Header */}
      <Header title='الحسابات' />

      {/* Green progress line */}
      <View className='px-6 pb-6'>
        <View className='h-[2px] bg-border-dark relative'>
          <View className='absolute right-0 left-0 h-[2px] bg-success-dark' />
          <View className='absolute top-[-5px] right-1/2 w-[10px] h-[10px] bg-success-dark rounded-full' />
        </View>
      </View>

      <View className='flex-1'>
        <TopTab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#1a1a1a', // using RN prop (NativeWind not applied here)
            },
            tabBarLabelStyle: {
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#4C8BF5',
              height: 3,
              borderRadius: 2,
            },
          }}>
          <TopTab.Screen
            name='Customers'
            component={CustomersPage}
            options={{
              title: 'الزبائن',
            }}
          />
          <TopTab.Screen
            name='Suppliers'
            component={SuppliersPage}
            options={{ title: 'الموردين' }}
          />
        </TopTab.Navigator>
      </View>
    </SafeAreaView>
  );
}
