import AddCustomerButton from '@/components/AddCustomerButton';
import CostomersItem from '@/components/CostomersItem';
import { ChevronDown, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Customer {
  id: number;
  name: string;
  balance: number;
}

export default function CustomersScreen() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'علاء ثابت', balance: 50.0 },
    { id: 2, name: 'نداء', balance: 50.0 },
  ]);

  const incrementBalance = (id: number) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, balance: c.balance + 10 } : c))
    );
  };

  const decrementBalance = (id: number) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, balance: Math.max(0, c.balance - 10) } : c
      )
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Search + Report */}
        <View style={styles.searchRow}>
          <TouchableOpacity style={styles.reportButton}>
            <View style={styles.reportIcon}>
              <View style={styles.reportSquare} />
            </View>
            <Text style={styles.reportText}>تقرير</Text>
          </TouchableOpacity>

          <View style={styles.searchBox}>
            <Search
              size={18}
              color='#9ca3af'
            />
            <TextInput
              placeholder='ابحث هنا...'
              placeholderTextColor='#6b7280'
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <ChevronDown
              size={16}
              color='#3b82f6'
            />
            <Text style={styles.filterText}>فلترة</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <ChevronDown
              size={16}
              color='#3b82f6'
            />
            <Text style={styles.filterText}>ترتيب</Text>
          </TouchableOpacity>
        </View>

        {/* Count */}
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{customers.length} زبائن</Text>
        </View>

        {/* Customer list */}
        <CostomersItem customers={customers} />
      </ScrollView>

      {/* Floating Add Button */}
      <AddCustomerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  scroll: { paddingBottom: 120 },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  onlineButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#22c55e',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 6,
  },
  onlineText: { color: '#22c55e', fontSize: 14 },
  title: { color: 'white', fontSize: 22 },

  progressContainer: { paddingHorizontal: 24, paddingBottom: 24 },
  progressBackground: {
    height: 2,
    backgroundColor: '#374151',
    position: 'relative',
  },
  progressBar: {
    height: 2,
    backgroundColor: '#22c55e',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  progressDot: {
    position: 'absolute',
    top: -5,
    right: '50%',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
  },

  tabs: {
    flexDirection: 'row-reverse',
    backgroundColor: '#2a2a2a',
    borderRadius: 20,
    marginHorizontal: 24,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 18,
  },
  activeTab: {
    backgroundColor: '#6366f1',
  },
  tabText: { color: '#9ca3af', fontSize: 16 },
  activeTabText: { color: 'white' },

  searchRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 16,
  },
  reportButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    gap: 8,
  },
  reportText: { color: 'white' },
  reportIcon: {
    width: 20,
    height: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
  reportSquare: {
    flex: 1,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  searchInput: {
    flex: 1,
    textAlign: 'right',
    color: 'white',
    fontSize: 14,
  },

  filters: {
    flexDirection: 'row-reverse',
    gap: 8,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  filterText: { color: '#3b82f6', fontSize: 14 },

  countContainer: { paddingHorizontal: 24, marginBottom: 12 },
  countText: { color: '#9ca3af' },

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
  addButtonText: { color: 'white', fontSize: 16 },
});
