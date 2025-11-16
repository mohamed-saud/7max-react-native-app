import { Text, View } from 'react-native';
import DateRow from './DateRow';

interface TransactionProps {
  amount: number;
  desc: string;
  created_at: any;
  customerName: string;
  prevDate?: string;
  id: number;
}

export default function TransactionRow({
  amount,
  desc,
  created_at,
  customerName,
  prevDate,
}: TransactionProps) {
  const currentDate = created_at?.split('T')[0];
  const previousDate = prevDate?.split('T')[0];
  const showDate = currentDate !== previousDate;
  return (
    <View className='flex-1 mb-5'>
      {showDate && <DateRow date={created_at} />}

      <View className='flex-row-reverse justify-between items-center p-3 rounded-2xl bg-card-dark my-1'>
        {/* Amount */}
        <Text
          className={`text-lg ${
            Number(amount) > 0 ? 'text-success-dark' : 'text-danger-dark'
          }`}>
          {amount}
        </Text>

        {/* Description */}
        <View className='flex-1 items-center'>
          <Text className='text-text-dark'>{desc}</Text>
        </View>

        {/* Customer name — MUST be inside <Text> */}
        <Text className='text-text-dark'>{customerName || ''}</Text>
      </View>
    </View>
  );
}
