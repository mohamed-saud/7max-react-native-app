import { MessageCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ title }: { title: String }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.onlineButton}>
        <MessageCircle
          size={18}
          color='#22c55e'
        />
        <Text style={styles.onlineText}>متصل</Text>
      </TouchableOpacity>
      <Text style={styles.title}> {title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  onlineButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#22c55e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },
  onlineText: {
    color: '#22c55e',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});
