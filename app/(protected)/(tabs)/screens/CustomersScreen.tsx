import AddCustomerButton from '@/components/AddCustomerButton';
import CostomersItem from '@/components/CostomersItem';
import { supabase } from '@/lib/supabase';
import { ChevronDown, Search } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Customer {
  id: number;
  name: string;
  phone: number;
}

export default function CustomersScreen() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const getCustomers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('customers').select('*');
    if (error) console.error('❌ Supabase error:', error.message);
    else setCustomers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  if (loading) {
    return (
      <View className='flex-1 bg-background-dark justify-center items-center'>
        <ActivityIndicator
          size='large'
          color='#6366f1'
        />
        <Text className='text-text-dark mt-3 text-base'>
          جاري تحميل العملاء...
        </Text>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-background-dark dark:bg-background-dark'>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* 🔍 Search & Report */}
        <View className='flex-row-reverse items-center gap-2 px-6 mt-4 mb-4'>
          <TouchableOpacity className='flex-row-reverse items-center bg-primary-dark py-3 px-5 rounded-xl gap-2'>
            <View className='w-5 h-5 border border-white rounded-md' />
            <Text className='text-white text-base'>تقرير</Text>
          </TouchableOpacity>

          <View className='flex-1 flex-row-reverse items-center bg-surface-dark rounded-xl px-3 py-2 gap-2'>
            <Search
              size={18}
              color='#9ca3af'
            />
            <TextInput
              placeholder='ابحث هنا...'
              placeholderTextColor='#9ca3af'
              className='flex-1 text-text-dark text-right text-sm'
            />
          </View>
        </View>

        {/* ⚙️ Filters */}
        <View className='flex-row-reverse gap-2 px-6 mb-4'>
          <TouchableOpacity className='flex-row-reverse items-center bg-surface-dark rounded-lg px-3 py-2 gap-1.5'>
            <ChevronDown
              size={16}
              color='#3b82f6'
            />
            <Text className='text-primary-dark text-sm'>فلترة</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row-reverse items-center bg-surface-dark rounded-lg px-3 py-2 gap-1.5'>
            <ChevronDown
              size={16}
              color='#3b82f6'
            />
            <Text className='text-primary-dark text-sm'>ترتيب</Text>
          </TouchableOpacity>
        </View>

        {/* 👥 Count */}
        <View className='px-6 mb-3'>
          <Text className='text-textSecondary-dark text-base'>
            {customers.length} زبائن
          </Text>
        </View>

        {/* 🧾 Customer List */}
        <CostomersItem customers={customers} />
      </ScrollView>

      {/* ➕ Floating Add Button */}
      <AddCustomerButton />
    </View>
  );
}
