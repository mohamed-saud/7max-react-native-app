import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const useAuthStore = create(
    combine(
        {
            user: null,
        },
        ( set, get ) => ( {
            setUser: async ( user: any ) => {
                set( { user } );
                if ( user ) await AsyncStorage.setItem( 'user', JSON.stringify( user ) );
                else await AsyncStorage.removeItem( 'user' );
            },
            loadUser: async () => {
                const saved = await AsyncStorage.getItem( 'user' );
                set( { user: saved ? JSON.parse( saved ) : null } );
            },
            logout: async () => {
                await AsyncStorage.removeItem( 'user' );
                set( { user: null } );
            },


        } )
    )
);

export default useAuthStore;
