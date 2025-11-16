import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCustomerScreen() {
  const [supplierName, setSupplierName] = useState('');
  const [phone, setPhone] = useState('');
  const [oldDebt, setOldDebt] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaView className='flex-1 bg-background-dark dark:bg-background-dark px-4 pb-10'>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className='flex-row items-center justify-center mt-3'>
          {/* <TouchableOpacity>
            <Ionicons
              name='chevron-back'
              size={28}
              color='#B9A4FF'
            />
          </TouchableOpacity> */}
          <Text className='text-text-dark dark:text-text-dark text-center text-2xl font-bold'>
            إضافة زبون
          </Text>
          {/* <View className='w-10 h-10 rounded-full overflow-hidden'> */}
          {/* <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              className='w-full h-full'
            /> */}
          {/* </View> */}
        </View>

        {/* Progress */}
        <View className='flex-row items-center justify-center my-5'>
          <View className='w-[38%] h-[3px] bg-border-light dark:bg-border-dark' />
          <View className='w-3 h-3 mx-2 rounded-full bg-success-light dark:bg-success-dark' />
          <View className='w-[38%] h-[3px] bg-border-light dark:bg-border-dark' />
        </View>

        {/* Search contacts */}
        {/* <TouchableOpacity className='flex-row items-center bg-card-light dark:bg-card-dark p-4 rounded-xl mb-5'>
          <Ionicons
            name='book-outline'
            size={24}
            color='#B9A4FF'
          />
          <Text className='text-textSecondary-light dark:text-textSecondary-dark text-base flex-1 ml-3'>
            البحث في جهات الاتصال
          </Text>
          <Ionicons
            name='search'
            size={22}
            color='#B9A4FF'
          />
        </TouchableOpacity> */}

        {/* Or manual */}
        {/* <View className='flex-row items-center justify-center my-3'>
          <View className='flex-1 h-px bg-border-light dark:bg-border-dark' />
          <Text className='text-textSecondary-light dark:text-textSecondary-dark mx-3'>
            أو يدويًا
          </Text>
          <View className='flex-1 h-px bg-border-light dark:bg-border-dark' />
        </View> */}

        {/* Supplier Name */}
        <Text className='text-text-dark dark:text-text-light mb-2 mt-3'>
          اسم زبون *
        </Text>
        <TextInput
          className='bg-card-light dark:bg-card-dark text-text-dark dark:text-text-light p-4 rounded-xl text-base'
          placeholder='اسم زبون'
          placeholderTextColor='#777'
          value={supplierName}
          onChangeText={setSupplierName}
        />

        {/* Phone */}
        <Text className='text-text-dark dark:text-text-light mb-2 mt-4'>
          رقم الهاتف
        </Text>
        <View className='flex-row items-center mb-2'>
          <Ionicons
            name='information-circle-outline'
            size={18}
            color='#6A7BFF'
          />
          <Text className='text-indigo-300 ml-1 text-sm'>
            سيتم إرسال رسائل WhatsApp إلى هذا الرقم
          </Text>
        </View>

        <View className='flex-row items-center bg-card-light dark:bg-card-dark rounded-xl px-3 h-14'>
          <Text className='text-2xl'>🇪🇬</Text>
          <Text className='text-text-dark dark:text-text-light ml-3 text-base'>
            +20
          </Text>
          <TextInput
            className='flex-1 ml-3 text-text-dark dark:text-text-light text-base'
            placeholder='رقم الهاتف'
            placeholderTextColor='#777'
            keyboardType='number-pad'
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Old debt */}
        <Text className='text-text-dark dark:text-text-light mb-2 mt-4'>
          الديون السابقة *
        </Text>
        <TextInput
          className='bg-card-light dark:bg-card-dark text-text-dark dark:text-text-light p-4 rounded-xl text-base'
          placeholder='الديون السابقة'
          placeholderTextColor='#777'
          keyboardType='decimal-pad'
          value={oldDebt}
          onChangeText={setOldDebt}
        />

        {/* Notes */}
        <Text className='text-text-dark dark:text-text-light mb-2 mt-4'>
          ملاحظات
        </Text>
        <TextInput
          className='bg-card-light dark:bg-card-dark text-text-dark dark:text-text-light p-4 rounded-xl text-base h-32'
          placeholder='ملاحظات'
          placeholderTextColor='#777'
          multiline
          value={notes}
          onChangeText={setNotes}
        />

        {/* Add button */}
        <TouchableOpacity className='bg-primary-light dark:bg-primary-dark py-4 rounded-xl mt-6 mb-10 items-center'>
          <Text className='text-text-light dark:text-text-dark text-lg'>
            إضافة
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
