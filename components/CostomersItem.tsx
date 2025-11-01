import { ChevronDown, Minus, Plus } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Customer {
  id: number;
  name: string;
  balance: number;
}

interface Props {
  customers: Customer[];
}

export default function CostomersItem({ customers }: Props) {
  const incrementBalance = (id: number) => {};

  const decrementBalance = (id: number) => {};
  return (
    <View style={styles.customerList}>
      {customers.map((c) => (
        <View
          key={c.id}
          style={styles.customerCard}>
          <View style={styles.customerHeader}>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                onPress={() => incrementBalance(c.id)}
                style={[styles.actionButton, { backgroundColor: '#16a34a' }]}>
                <Plus
                  size={20}
                  color='white'
                  strokeWidth={3}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => decrementBalance(c.id)}
                style={[styles.actionButton, { backgroundColor: '#dc2626' }]}>
                <Minus
                  size={20}
                  color='white'
                  strokeWidth={3}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.customerName}>{c.name}</Text>
              <Text style={styles.balanceText}>
                <Text style={styles.gray}>الرصيد: </Text>
                {c.balance.toFixed(1)}
              </Text>
            </View>
          </View>

          <View style={styles.detailsLink}>
            <Text style={styles.graySmall}>اضغط لعرض التفاصيل</Text>
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

const styles = StyleSheet.create({
  customerList: { paddingHorizontal: 24 },
  customerCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  customerHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row-reverse',
    gap: 8,
  },
  actionButton: {
    padding: 10,
    borderRadius: 10,
  },
  customerName: { color: 'white', fontSize: 18, marginBottom: 4 },
  balanceText: { color: 'white' },
  gray: { color: '#9ca3af', fontSize: 13 },
  graySmall: { color: '#9ca3af', fontSize: 12 },

  detailsLink: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },

  addButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
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
});
