import useAuthStore from '@/contexts/useAuthStore';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, Phone, User } from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RegisterScreen() {
  const { setUser } = useAuthStore();
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !phone || !password) {
      return Alert.alert('⚠️', 'يرجى ملء جميع الحقول');
    }

    // 🔐 Register logic (Firebase / backend API)
    // Example: await api.register({ name, phone, password });

    setUser({ name, phone });
    router.replace('/(tabs)');
  };

  return (
    <View className='flex-1 items-center justify-center px-8 bg-black'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='gap-8 w-full'>
        {/* Header */}
        <View className='items-center mb-6'>
          <Text className='text-3xl font-bold text-white mb-2'>
            إنشاء حساب جديد
          </Text>
          <Text className='text-gray-400 text-center'>
            قم بإنشاء حسابك باستخدام رقم واتساب وكلمة المرور
          </Text>
        </View>

        {/* Inputs */}
        <View className='gap-6'>
          {/* Name */}
          <View className='flex-row items-center border border-gray-700 bg-[#111] rounded-2xl px-4 py-3'>
            <User
              size={20}
              color='#22c55e'
            />
            <TextInput
              className='flex-1 text-white ml-3 text-lg'
              placeholder='الاسم الكامل'
              placeholderTextColor='#888'
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* WhatsApp Number */}
          <View className='flex-row items-center border border-gray-700 bg-[#111] rounded-2xl px-4 py-3'>
            <Phone
              size={20}
              color='#22c55e'
            />
            <TextInput
              className='flex-1 text-white ml-3 text-lg'
              placeholder='رقم الواتساب'
              placeholderTextColor='#888'
              keyboardType='phone-pad'
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Password */}
          <View className='flex-row items-center border border-gray-700 bg-[#111] rounded-2xl px-4 py-3'>
            <Lock
              size={20}
              color='#22c55e'
            />
            <TextInput
              className='flex-1 text-white ml-3 text-lg'
              placeholder='كلمة المرور'
              placeholderTextColor='#888'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          onPress={handleRegister}
          activeOpacity={0.8}
          className='mt-6 rounded-2xl overflow-hidden'>
          <LinearGradient
            colors={['#16a34a', '#22c55e', '#4ade80']}
            start={[0, 0]}
            end={[1, 1]}
            className='py-4 rounded-2xl'>
            <Text className='text-center text-white font-semibold text-lg'>
              إنشاء الحساب
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Back to Login */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/login')}
          activeOpacity={0.8}
          className='mt-3 border border-green-600 rounded-2xl py-3'>
          <Text className='text-center text-green-400 font-semibold text-lg'>
            لدي حساب بالفعل
          </Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text className='text-gray-500 text-center mt-8 text-sm leading-5'>
          بالاستمرار، أنت توافق على شروط الاستخدام وسياسة الخصوصية
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
}
