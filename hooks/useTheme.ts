import { useColorScheme } from 'react-native';

export function useTheme() {
    const colorScheme = useColorScheme();

    return {
        theme: {
            background: colorScheme === 'dark' ? '#000000' : '#ffffff'
        }
    };
}