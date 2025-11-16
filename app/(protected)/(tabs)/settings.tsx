import i18n from '@/lib/i18n';
import { useClerk, useUser } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import {
  Bell,
  Globe,
  HelpCircle,
  LogOut,
  MessageCircle,
  Moon,
  UserCircle,
  X,
} from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  DevSettings,
  I18nManager,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const { user } = useUser();
  const { signOut, session } = useClerk();

  const [lang, setLang] = useState(i18n.language);
  // 👇 Update RTL/LTR whenever language changes
  useEffect(() => {
    const isArabic = lang === 'ar';
    I18nManager.allowRTL(isArabic);
    I18nManager.forceRTL(isArabic);
  }, [lang]);

  const toggleLanguage = async () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    await i18n.changeLanguage(newLang);
    setLang(newLang);
    console.log(newLang);

    const isArabic = newLang === 'ar';
    I18nManager.allowRTL(isArabic);
    I18nManager.forceRTL(isArabic);
    DevSettings.reload(); // works just like a full reload
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 60 }}
      style={[darkMode && styles.darkContainer]}>
      <SafeAreaView
        style={[styles.container, darkMode && styles.darkContainer]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.onlineButton}>
            <MessageCircle
              size={18}
              color='#22c55e'
            />
            <Text style={styles.onlineText}>متصل</Text>
          </TouchableOpacity>
          <Text style={styles.title}>الإعدادات</Text>
        </View>

        {/* Progress line */}
        <View style={styles.progressContainer}>
          <View style={styles.progressLine}>
            <View style={styles.progressDot} />
          </View>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>المظهر</Text>

          {/* Dark Mode */}
          <View style={styles.row}>
            <Text style={styles.label}>تفعيل الوضع الليلي</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
            <Moon
              color='#ccc'
              size={20}
            />
          </View>

          {/* Language Selector */}
          <View style={styles.row}>
            <Text style={styles.label}>اللغة</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => toggleLanguage()}>
              <Text style={styles.dropdownText}>
                {lang === 'ar' ? 'العربية' : 'English'}
              </Text>
            </TouchableOpacity>
            <Globe
              color='#ccc'
              size={20}
            />
          </View>

          {/* Font Size (Static for now) */}
          <View style={[styles.row, { marginTop: 20 }]}>
            <Text style={styles.label}>حجم الخط</Text>
            <Text style={styles.grayText}>abc</Text>
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>إعدادات الحساب</Text>

          <TouchableOpacity style={styles.rowEnd}>
            <Text style={styles.linkText}>معلومات الحساب</Text>
            <UserCircle
              color='#999'
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowEnd}
            onPress={async () => {
              await signOut();
              router.replace('/(auth)/sign-in');
            }}>
            <Text style={[styles.linkText, { color: 'red' }]}>
              تسجيل الخروج
            </Text>
            <LogOut
              color='red'
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rowEnd}>
            <Text style={styles.linkText}>بحاجة للمساعدة؟</Text>
            <HelpCircle
              color='#999'
              size={20}
            />
          </TouchableOpacity>

          {/* Connected User Card */}
          <View style={styles.userCard}>
            <TouchableOpacity style={styles.disconnectButton}>
              <X
                color='#fff'
                size={16}
              />
              <Text style={styles.disconnectText}>قطع الاتصال</Text>
            </TouchableOpacity>

            <View style={styles.userInfo}>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.userName}>Mohamed</Text>
                <Text style={styles.userNumber}>201014224087</Text>
              </View>
              {/* <Image
                source={'../../assets/icons/logo.png'} // 👈 place your image here
                style={styles.avatar}
              /> */}
            </View>
          </View>
        </View>

        {/* App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>إعدادات التطبيق</Text>

          <View style={styles.rowStart}>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
            <View style={{ marginRight: 10, flex: 1 }}>
              <View style={styles.rowEnd}>
                <Text style={styles.label}>تفعيل إشعارات الزبائن</Text>
                <Bell
                  color='#999'
                  size={20}
                />
              </View>
              <Text style={styles.grayText}>
                سيتم إرسال رسالة واتساب للزبون بشكل تلقائي
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
  },
  darkContainer: { backgroundColor: '#1a1a1a' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlineButton: {
    flexDirection: 'row-reverse',
    borderColor: '#22c55e',
    borderWidth: 2,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  onlineText: { color: '#22c55e', marginRight: 6 },
  title: { fontSize: 24, color: '#fff' },
  progressContainer: { marginTop: 10 },
  progressLine: {
    height: 2,
    backgroundColor: '#22c55e',
    position: 'relative',
  },
  progressDot: {
    position: 'absolute',
    right: '50%',
    top: -4,
    width: 8,
    height: 8,
    backgroundColor: '#22c55e',
    borderRadius: 4,
  },
  section: { marginTop: 30 },
  sectionTitle: { color: '#fff', fontSize: 18, marginBottom: 12 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: { color: '#fff', fontSize: 16 },
  grayText: { color: '#aaa', fontSize: 13 },
  dropdown: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dropdownText: { color: '#fff', textAlign: 'center' },
  linkText: { color: '#fff', fontSize: 16, marginLeft: 6 },
  userCard: {
    backgroundColor: '#1c3f2b',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  disconnectButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#256d3d',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  disconnectText: { color: '#fff', marginRight: 6 },
  userInfo: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  userName: { color: '#fff', fontSize: 16 },
  userNumber: { color: '#c9f5d3', fontSize: 13 },
  avatar: { width: 50, height: 50, borderRadius: 12, marginLeft: 10 },
});
