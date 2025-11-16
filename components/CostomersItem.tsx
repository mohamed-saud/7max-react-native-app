import { Link } from 'expo-router';
import { ChevronDown, Minus, Plus } from 'lucide-react-native';
import { Text, View } from 'react-native';

interface Customer {
  id: number;
  fullName: string;
  balance: number;
}

interface Props {
  customers: Customer[];
}

export default function CustomersItem({ customers }: Props) {
  // const navigation = useNavigation();

  return (
    <View className='px-6 flex-1 dark:bg-background-dark light:bg-background-light'>
      {customers.map((c) => (
        <View
          key={c.id}
          className='bg-[#2a2a2a]  rounded-2xl p-4 mb-4'>
          {/* Header */}
          <View className='flex-row-reverse justify-between items-start mb-3'>
            {/* Buttons */}
            <View className='flex-row-reverse m-2 gap-4  space-x-reverse space-x-2'>
              <Link
                href={{
                  pathname: '/(protected)/(tabs)/(customer)/addTransaction',
                  params: {
                    id: c.id,
                    method: 'batch',
                    fullName: c.fullName,
                  },
                }}
                className='bg-green-600 p-2.5  rounded-xl'>
                <Plus
                  size={20}
                  color='white'
                  strokeWidth={3}
                />
              </Link>

              <Link
                href={{
                  pathname: '/(protected)/(tabs)/(customer)/addTransaction',
                  params: {
                    id: c.id,
                    method: 'religion',
                    fullName: c.fullName,
                  },
                }}
                className='bg-red-600 p-2.5 rounded-xl'>
                <Minus
                  size={20}
                  color='white'
                  strokeWidth={3}
                />
              </Link>
            </View>

            {/* Customer Info */}
            <View className='items-end'>
              <Text className='text-white text-lg mb-1'>{c.fullName}</Text>
              <Text className='text-white text-sm'>
                <Text className='text-gray-400'>الرصيد: </Text>
                {Number(33333).toFixed(1)}
              </Text>
            </View>
          </View>

          {/* Details Link */}
          <View className='flex-row-reverse justify-end items-center space-x-reverse space-x-1'>
            <Text className='text-gray-400 text-xs'>اضغط لعرض التفاصيل</Text>
            <ChevronDown
              size={16}
              color='#9ca3af'
              style={{ transform: [{ rotate: '-90deg' }] }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
