// App.tsx
import Header from '@/components/Header';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <Header title='7MAX' />

        {/* Green Dot */}
        <View style={styles.center}>
          <View style={styles.greenDot} />
        </View>

        {/* Stats */}
        <View style={styles.statsGrid}>
          <StatCard
            title='مجموع الدين'
            value='100.00'
            colors={['#6366f1', '#4f46e5']}
          />
          <StatCard
            title='عدد الزبائن'
            value='2'
            colors={['#6366f1', '#4f46e5']}
          />
          <StatCard
            title='المبلغ الذي تم سداده هذا الشهر'
            value='0.00'
            colors={['#16a34a', '#15803d']}
          />
          <StatCard
            title='مجموع الدين هذا الشهر'
            value='100.00'
            colors={['#ef4444', '#dc2626']}
          />
        </View>

        {/* Transactions */}
        <View style={styles.transactions}>
          <Text style={styles.sectionTitle}>آخر الحركات</Text>

          <DateRow date='2025-10-19' />
          <Transaction
            amount='+50.00'
            name='علاء ثابت'
            desc='زبون جديد'
          />
          <Transaction
            amount='+50.00'
            name='نداء'
            desc='زبون جديد'
          />

          <DateRow date='2025-10-18' />
          <Transaction
            amount='+200000.00'
            name='احمد المحلوين'
            desc='زبون جديد'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* === Components === */
function StatCard({
  title,
  value,
  colors,
}: {
  title: string;
  value: string;
  colors: string[];
}) {
  return (
    <View style={[styles.card, { backgroundColor: colors[0] }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

function DateRow({ date }: { date: string }) {
  return (
    <View style={styles.dateRow}>
      <Text style={styles.dateArrow}>‹</Text>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
}

function Transaction({
  amount,
  name,
  desc,
}: {
  amount: string;
  name: string;
  desc: string;
}) {
  return (
    <View style={styles.transactionRow}>
      <Text style={styles.amount}>{amount}</Text>
      <View style={styles.transactionCenter}>
        <Text style={styles.textWhite}>{desc}</Text>
      </View>
      <Text style={styles.textWhite}>{name}</Text>
    </View>
  );
}

/* === Styles === */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scroll: {
    paddingBottom: 100,
  },
  textWhite: {
    color: 'white',
  },
  statusBar: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
  },
  statusRight: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  signalDots: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 6,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: 'white',
    borderRadius: 2,
    marginVertical: 1,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  batteryBody: {
    width: 16,
    height: 8,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  batteryTip: {
    width: 2,
    height: 4,
    backgroundColor: 'white',
    marginLeft: 2,
  },
  batteryPercent: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  batteryText: {
    color: 'black',
    fontSize: 10,
  },

  center: {
    alignItems: 'center',
    paddingBottom: 12,
  },
  greenDot: {
    width: 8,
    height: 8,
    backgroundColor: '#22c55e',
    borderRadius: 4,
  },
  statsGrid: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: '48%',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  cardTitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    color: 'white',
  },
  transactions: {
    paddingHorizontal: 24,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 16,
  },
  dateRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  dateText: {
    color: 'white',
  },
  dateArrow: {
    color: '#9ca3af',
  },
  transactionRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#1f2937',
    marginVertical: 5,
  },
  transactionCenter: {
    flex: 1,
    alignItems: 'center',
  },
  amount: {
    color: '#22c55e',
    fontSize: 18,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderColor: '#1f2937',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
});
