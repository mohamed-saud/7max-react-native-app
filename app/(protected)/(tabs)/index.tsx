// app/index.tsx
import Header from '@/components/Header';
import LoadingSpiner from '@/components/loadingSpiner';
import TransactionRow from '@/components/Transaction';
import useCustomersStore from '@/contexts/useCustomersStore';
import useTransactionsStore from '@/contexts/useTransactionsStore';
import { useFocusEffect } from 'expo-router';
import React, { useCallback } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const {
    transactions,
    loadTransactionsWithCustomers,
    loading,
    loadTransactions,
  } = useTransactionsStore((state) => state);
  const { customers, loadCustomers } = useCustomersStore((state) => state);
  const allRegand = transactions
    .map((t) => Number(t.amount))
    .reduce((total, num) => total + num, 0);

  const totalPositive = transactions
    .filter((t) => t.amount > 0)
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0);

  const totalNegative = transactions
    .filter((t) => t.amount < 0)
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0);
  // Load all data when screen is focused
  useFocusEffect(
    useCallback(() => {
      loadCustomers();
      // loadTransactions();
      loadTransactionsWithCustomers();
    }, [])
  );
  if (!customers && !transactions && loading) return <LoadingSpiner />;
  return (
    <SafeAreaView className='flex-1 bg-background-dark'>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Header title='7MAX' />

        {/* Online Dot */}
        <View className='items-center pb-3'>
          <View className='w-2 h-2 bg-success-dark rounded-full' />
        </View>

        {/* Stats */}
        <View className='flex-row-reverse flex-wrap justify-between px-4'>
          <StatCard
            title='مجموع الدين'
            value={allRegand}
            color='primary-dark'
          />
          <StatCard
            title='عدد الزبائن'
            value={customers.length.toString()}
            color='primary-dark'
          />
          <StatCard
            title='المبلغ الذي تم سداده هذا الشهر'
            value={totalPositive}
            color='success-dark'
          />
          <StatCard
            title='مجموع الدين هذا الشهر'
            value={totalNegative}
            color='danger-dark'
          />
        </View>

        {/* Transactions */}
        <View className='flex-1 px-6 mt-3'>
          <Text className='text-text-dark text-lg mb-4 font-bold'>
            آخر الحركات
          </Text>

          <View className='flex-1'>
            {[...transactions].reverse().map((tran, index, reversedArray) => {
              const customer = tran?.customers?.fullName;
              return (
                <TransactionRow
                  key={`${tran.id}-${tran.created_at}-${index}`}
                  amount={tran.amount}
                  desc='زبون جديد'
                  created_at={tran.created_at}
                  customerName={customer && customer}
                  prevDate={reversedArray[index - 1]?.created_at} // ✅ correct previous date after reversing
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* === Components === */
function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number | string;
  color: string;
}) {
  const bgColors = {
    'primary-dark': 'bg-primary-dark',
    'success-dark': 'bg-success-dark',
    'danger-dark': 'bg-danger-dark',
  };

  return (
    <View className={`w-[48%] rounded-2xl p-5 mb-3 ${bgColors[color]}`}>
      <Text className='text-textSecondary-dark text-sm mb-2'>{title}</Text>
      <Text className='text-text-dark text-2xl font-semibold'>{value}</Text>
    </View>
  );
}
