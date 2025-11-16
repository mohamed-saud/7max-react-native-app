import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Calculator, Calendar, MessageSquare } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  I18nManager,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

I18nManager.forceRTL(true);

export default function AddDebtCustomer() {
  const id = useLocalSearchParams();
  console.log(id);
  const [expression, setExpression] = useState('0');
  const [result, setResult] = useState('0');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(
    format(new Date(), 'yyyy-MM-dd', { locale: ar })
  );

  const handlePress = (value: string) => {
    if (value === 'C') return (setExpression('0'), setResult('0'));
    if (value === '→')
      return setExpression(
        expression.length > 1 ? expression.slice(0, -1) : '0'
      );
    if (value === '=') {
      try {
        const evaluated = evalExpression(expression);
        setResult(evaluated.toString());
      } catch {
        setResult('خطأ');
      }
      return;
    }
    if (expression === '0' && /[0-9.]/.test(value)) return setExpression(value);
    setExpression((prev) => prev + value);
  };

  const evalExpression = (exp: string): number => {
    const safeExp = exp.replace(/×/g, '*').replace(/÷/g, '/');
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return (${safeExp})`);
    const result = fn();
    if (typeof result === 'number' && !isNaN(result)) return result;
    throw new Error('Invalid expression');
  };

  const keys = [
    ['C', '→', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '±', '='],
  ];

  return (
    <KeyboardAvoidingView
      className='flex-1 bg-background-dark'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        className='flex-1 px-4 pt-10'
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ paddingBottom: 80 }}>
        <Text className='text-center text-text-dark text-xl font-bold mb-1'>
          إضافة دين
        </Text>
        <View className='h-0.5 w-1/3 bg-success-dark self-center my-1 rounded-full' />
        <Text className='text-center text-textSecondary-dark mb-6'>
          إضافة دين لحساب: <Text className='text-text-dark'>إيرادات المحل</Text>
        </Text>

        {/* المبلغ */}
        <Text className='text-right text-textSecondary-dark mb-2'>
          المبلغ *
        </Text>
        <View className='flex-row items-center bg-card-dark rounded-2xl mb-4'>
          <View className='bg-success-dark p-3 rounded-l-2xl'>
            <Calculator
              color='white'
              size={22}
            />
          </View>
          <TextInput
            className='flex-1 text-right text-text-dark text-lg p-3'
            placeholder='المبلغ'
            placeholderTextColor='#777'
            value={result !== '0' ? result : expression}
            editable={false}
          />
        </View>

        {/* الآلة الحاسبة */}
        <View className='bg-card-dark rounded-2xl mb-6 p-3'>
          <Text className='text-text-dark text-2xl text-right px-2'>
            {expression}
          </Text>
          {result !== '0' && (
            <Text className='text-success-dark text-right text-3xl font-bold px-2'>
              = {result}
            </Text>
          )}
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
                        ? 'bg-primary-dark'
                        : key === 'C'
                          ? 'bg-border-dark'
                          : 'bg-background-dark'
                    }`}>
                    <Text className='text-white text-lg font-bold'>{key}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* التاريخ */}
        <Text className='text-right text-textSecondary-dark mb-2'>
          التاريخ *
        </Text>
        <View className='flex-row items-center bg-card-dark rounded-2xl mb-4'>
          <View className='bg-border-dark p-3 rounded-l-2xl'>
            <Calendar
              color='white'
              size={20}
            />
          </View>
          <TextInput
            className='flex-1 text-right text-text-dark text-lg p-3'
            value={date}
            editable={false}
          />
        </View>

        {/* الملاحظات */}
        <Text className='text-right text-textSecondary-dark mb-2'>ملاحظات</Text>
        <View className='flex-row items-center bg-card-dark rounded-2xl mb-6'>
          <View className='bg-border-dark p-3 rounded-l-2xl'>
            <MessageSquare
              color='white'
              size={20}
            />
          </View>
          <TextInput
            className='flex-1 text-right text-text-dark text-lg p-3'
            placeholder='ملاحظات'
            placeholderTextColor='#777'
            value={note}
            onChangeText={setNote}
            multiline
            onFocus={() => {
              // when focusing, ScrollView automatically moves up because of KeyboardAvoidingView
            }}
          />
        </View>

        {/* زر الإضافة */}
        <TouchableOpacity className='bg-card-dark rounded-2xl py-3 mb-10'>
          <Text className='text-text-dark text-center text-lg font-bold'>
            إضافة
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
