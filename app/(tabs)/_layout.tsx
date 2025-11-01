import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, View } from 'react-native';

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-6 justify-center items-center rounded-full overflow-hidden'>
        <Image
          source={icon}
          tintColor='#151312'
          className='size-8'
        />
      </ImageBackground>
    );
  }

  return (
    <View className='size-full justify-center items-center mt-6 rounded-full'>
      <Image
        source={icon}
        tintColor='#e3eaff'
        className='size-8'
      />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0F0D23',
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 60,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0F0D23',
        },
      }}>
      <Tabs.Screen
        name='settings'
        options={{
          title: 'settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.settings}
              title='Settings'
            />
          ),
        }}
      />

      <Tabs.Screen
        name='messages'
        options={{
          title: 'messages',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.messages}
              title='Messages'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='customers'
        options={{
          title: 'customers',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.accounts}
              title='customers'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'index',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title='Home'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='screens/SuppliersScreen'
        options={{
          href: null, // 👈 This hides the tab completely
          headerShown: false,
          title: 'screens/SuppliersScreen',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title='amm'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='screens/CustomersScreen'
        options={{
          href: null, // 👈 This hides the tab completely
          headerShown: false,
          title: 'screens/CustomersScreen',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title='sdss'
            />
          ),
        }}
      />
    </Tabs>
  );
}
