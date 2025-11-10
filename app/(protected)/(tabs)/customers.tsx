import Header from '@/components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomersScreen from './screens/CustomersScreen';
import SuppliersScreen from './screens/SuppliersScreen';

const TopTab = createMaterialTopTabNavigator();

export default function customers() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={'الحسابات'} />

      {/* Green progress line */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View style={styles.progressBar} />
          <View style={styles.progressDot} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TopTab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#1a1a1a' },
            tabBarLabelStyle: {
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#6366f1',
              height: 3,
              borderRadius: 2,
            },
          }}>
          <TopTab.Screen
            name='Customers'
            component={CustomersScreen}
            options={{
              title: 'الزبائن',
            }}
          />
          <TopTab.Screen
            name='Suppliers'
            component={SuppliersScreen}
            options={{ title: 'الموردين' }}
          />
        </TopTab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // container: { flex: 1, backgroundColor: '#1a1a1a' },
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
  // title: { color: 'white', fontSize: 22 },

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
});
