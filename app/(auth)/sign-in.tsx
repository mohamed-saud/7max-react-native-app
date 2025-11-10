// import { SignIn } from '@clerk/clerk-expo/web';
// import React from 'react';

// export default function Page() {
//   return <SignIn />;
// }

import useAuthStore from '@/contexts/useAuthStore';
import { useOAuth, useUser } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginButton() {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const { user } = useUser();
  const { user2 } = useAuthStore();
  const { setUser } = useAuthStore((state) => state);
  console.log(user, user2);
  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        console.log('✅ Google login success!');
        setUser(user);
        router.replace('/(protected)/(tabs)');
      }
    } catch (err) {
      console.error('❌ Google login error:', err);
    }
  };

  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <TouchableOpacity
        onPress={handleGoogleLogin}
        activeOpacity={0.8}
        className='bg-white px-6 py-4 rounded-2xl'>
        <Text className='text-black font-semibold text-lg'>
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
