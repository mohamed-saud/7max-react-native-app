import { format } from 'date-fns';
import { Text, View } from 'react-native';

export default function DateRow({ date }: { date: string }) {
  const formattedDate = format(date.toString(), 'MMMM do, yyyy H:mma');
  return (
    <View className='flex-row-reverse  justify-end items-center mb-2 space-x-2 '>
      <Text className='   text-tabIconInactive-dark'>{'‹'}</Text>
      <Text className=' text-text-dark'>{formattedDate}</Text>
    </View>
  );
}
