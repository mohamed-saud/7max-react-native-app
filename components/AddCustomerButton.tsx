import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';
import { Plus } from 'lucide-react-native';
const AddCustomerButton = ({ screenName }: { screenName: string }) => {
  return (
    <View className=' absolute  p-4 bottom-[110px] right-4 rounded-full flex items-center  justify-center'>
      <Link
        href={`/(protected)/(tabs)/(customer)/${screenName}`}
        style={styles.addButton}>
        <Plus
          size={20}
          color='white'
        />
        <Text style={styles.addButtonText}>إضافة زبون</Text>
      </Link>
    </View>
  );
};

export default AddCustomerButton;

const styles = StyleSheet.create({
  addButton: {
    alignSelf: 'center',
    backgroundColor: '#6366f1',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 20,
    gap: 8,
    elevation: 8,
  },
  addButtonText: { color: 'white', fontSize: 16 },
});
