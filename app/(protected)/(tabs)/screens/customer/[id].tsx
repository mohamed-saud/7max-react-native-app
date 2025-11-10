import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { useLocalSearchParams } from 'expo-router';
import { Calculator, Calendar, MessageSquare } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  I18nManager,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

I18nManager.forceRTL(true);

export default function AddDebtScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [input, setInput] = useState('0');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(
    format(new Date(), 'yyyy-MM-dd', { locale: ar })
  );

  const handlePress = (value: string) => {
    // clear
    if (value === 'C') {
      setInput('0');
      return;
    }

    // backspace
    if (value === '→') {
      if (input.length > 1) setInput(input.slice(0, -1));
      else setInput('0');
      return;
    }

    // percent
    if (value === '%') {
      try {
        const result = parseFloat(input) / 100;
        setInput(result.toString());
      } catch {
        setInput('0');
      }
      return;
    }

    // toggle sign
    if (value === '±') {
      if (input.startsWith('-')) setInput(input.substring(1));
      else if (input !== '0') setInput('-' + input);
      return;
    }

    // calculate
    if (value === '=') {
      try {
        const expression = input
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/,/g, '.');
        // Use Function to safely evaluate numeric expression
        // eslint-disable-next-line no-new-func
        const result = new Function(`return (${expression})`)();
        if (typeof result === 'number' && !isNaN(result))
          setInput(result.toString());
      } catch {
        setInput('خطأ');
      }
      return;
    }

    // if current is 0 and we type number
    if (input === '0' && /[0-9.]/.test(value)) {
      setInput(value);
      return;
    }

    // append value
    setInput((prev) => prev + value);
  };

  const keys = [
    ['C', '→', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '±', '='],
  ];

  return (
    <ScrollView className='flex-1 bg-[#111] px-4 pt-10'>
      <Text className='text-center text-white text-xl font-bold mb-1'>
        إضافة دين
      </Text>
      <View className='h-0.5 w-1/3 bg-green-500 self-center my-1 rounded-full' />
      <Text className='text-center text-gray-300 mb-6'>
        إضافة دين لحساب: <Text className='text-white'>إيرادات المحل</Text>
      </Text>

      {/* المبلغ */}
      <Text className='text-right text-gray-300 mb-2'>المبلغ *</Text>
      <View className='flex-row items-center bg-[#222] rounded-2xl mb-4'>
        <View className='bg-green-600 p-3 rounded-l-2xl'>
          <Calculator
            color='white'
            size={22}
          />
        </View>
        <TextInput
          className='flex-1 text-right text-white text-lg p-3'
          placeholder='المبلغ'
          placeholderTextColor='#777'
          value={input}
          editable={false}
        />
      </View>

      {/* الآلة الحاسبة */}
      <View className='bg-[#222] rounded-2xl mb-6 p-2'>
        <Text className='text-white text-3xl text-right px-3'>{input}</Text>
        <View className='mt-3'>
          {keys.map((row, rowIndex) => (
            <View
              key={rowIndex}
              className='flex-row justify-between mb-2'>
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => handlePress(key)}
                  className={`flex-1 m-1 rounded-xl items-center justify-center py-3 ${
                    ['÷', '×', '-', '+', '='].includes(key)
                      ? 'bg-indigo-600'
                      : key === 'C'
                        ? 'bg-gray-700'
                        : 'bg-gray-800'
                  }`}>
                  <Text className='text-white text-lg font-bold'>{key}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* التاريخ */}
      <Text className='text-right text-gray-300 mb-2'>التاريخ *</Text>
      <View className='flex-row items-center bg-[#222] rounded-2xl mb-4'>
        <View className='bg-gray-700 p-3 rounded-l-2xl'>
          <Calendar
            color='white'
            size={20}
          />
        </View>
        <TextInput
          className='flex-1 text-right text-white text-lg p-3'
          value={date}
          editable={false}
        />
      </View>

      {/* الملاحظات */}
      <Text className='text-right text-gray-300 mb-2'>ملاحظات</Text>
      <View className='flex-row items-center bg-[#222] rounded-2xl mb-6'>
        <View className='bg-gray-700 p-3 rounded-l-2xl'>
          <MessageSquare
            color='white'
            size={20}
          />
        </View>
        <TextInput
          className='flex-1 text-right text-white text-lg p-3'
          placeholder='ملاحظات'
          placeholderTextColor='#777'
          value={note}
          onChangeText={setNote}
        />
      </View>

      {/* زر الإضافة */}
      <TouchableOpacity className='bg-[#333] rounded-2xl py-3 mb-10'>
        <Text className='text-white text-center text-lg font-bold'>إضافة</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
