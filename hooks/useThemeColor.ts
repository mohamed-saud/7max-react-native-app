import { useColorScheme } from 'react-native';

type ThemeColor = 'text' | 'background';

export function useThemeColor( colorName: ThemeColor ): string {
    const theme = useColorScheme() ?? 'light';

    const colors = {
        light: {
            text: '#000',
            background: '#fff',
        },
        dark: {
            text: '#fff',
            background: '#000',
        },
    };

    return colors[ theme ][ colorName ];
}