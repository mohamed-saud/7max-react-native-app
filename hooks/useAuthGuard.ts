import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';

export function useAuthGuard( user: any ) {
    const router = useRouter();
    const rootNavigation = useRootNavigationState();

    useEffect( () => {
        // ✅ Wait until navigation is fully ready
        if ( !rootNavigation?.key ) return;

        // ✅ Avoid running while user state still loading
        if ( user === undefined ) return;

        // ✅ Perform redirects only after ready
        if ( user === null ) {
            router.replace( '/(auth)/login' );
        } else {
            router.replace( '/(tabs)' );
        }
    }, [ user, rootNavigation?.key ] );
}
