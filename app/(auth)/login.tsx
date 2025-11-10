import useAuthStore from '@/contexts/useAuthStore';
import { supabase } from '@/lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, Phone } from 'lucide-react-native';
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

export default function LoginScreen() {
  const { setUser } = useAuthStore();
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  async function singUpSupabase() {
    let { data, error } = await supabase.auth.signUp({
      phone: '+201014224087',
      password: '123456789',
    });
    console.log(data);
  }
  async function verfyOtpSupabase() {
    let { data, error } = await supabase.auth.verifyOtp({
      phone: '+201014224089',
      token: '123456789',
      type: 'sms',
    });
    console.log(data);
  }
  const handleLogin = async () => {
    if (!phone || !password) {
      return Alert.alert('⚠️', 'يرجى إدخال رقم الواتساب وكلمة المرور');
    }

    try {
      singUpSupabase();
      // Temporary mock user
      const user = { phone };
      setUser(user);

      // Redirect to main app
      // router.replace('/(protected)/(tabs)');
    } catch (error) {
      Alert.alert('❌', 'فشل تسجيل الدخول. تحقق من البيانات وحاول مرة أخرى.');
    }
  };

  return (
    <View className='flex-1 items-center justify-center px-8 bg-black'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='gap-8 w-full'>
        {/* Header */}
        <View className='items-center mb-6'>
          <Text className='text-3xl font-bold text-white mb-2'>
            تسجيل الدخول
          </Text>
          <Text className='text-gray-400 text-center'>
            أدخل رقم الواتساب وكلمة المرور لتسجيل الدخول إلى حسابك
          </Text>
        </View>

        {/* Input Fields */}
        <View className='gap-6'>
          {/* Phone Number */}
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

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.8}
          className='mt-8 rounded-3xl overflow-hidden w-full  justify-center h-16  '>
          <LinearGradient
            colors={['#16a34a', '#22c55e', '#4ade80']}
            start={[0, 0]}
            end={[1, 1]}
            className='py-4 rounded-2xl  justify-center items-center h-16 '>
            <Text className='text-center text-white font-semibold text-lg w-full h-16  '>
              تسجيل الدخول
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() =>
            Alert.alert('🔑', 'ميزة استعادة كلمة المرور قيد التطوير')
          }
          activeOpacity={0.8}
          className='mt-2'>
          <Text className='text-center text-green-400 font-semibold text-base'>
            نسيت كلمة المرور؟
          </Text>
        </TouchableOpacity>

        {/* Go to Register */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/register')}
          activeOpacity={0.8}
          className='mt-3 border border-green-600 rounded-2xl py-3'>
          <Text className='text-center text-green-400 font-semibold text-lg'>
            إنشاء حساب جديد
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
