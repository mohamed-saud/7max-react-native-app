import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function ProtectedLayout() {
  const systemTheme = useColorScheme();
  // const { setColorScheme } = useTailwindScheme();

  // useEffect(() => {
  //   setColorScheme(systemTheme);
  // }, [systemTheme]);

  // const { user } = useUser();

  // if (!user) {
  //   return <Redirect href='/(auth)/sign-in' />;
  // }
  return (
    <>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar hidden={true} />
        <Stack.Screen
          options={{ headerShown: false }}
          name='(auth)'
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='(tabs)'
        />
      </Stack>
    </>
  );
}
