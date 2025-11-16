import { supabase } from '@/lib/supabase';
import { create } from 'zustand';

export interface Customer {
    id?: string;
    fullName: string;
    phone?: number;
    create_at: string;

}

interface CustomersState {
    customers: Customer[]
    loading: boolean;
    error: string | null;
    loadCustomers: () => Promise<void>;
    addCustomer: ( tran: Customer ) => void;
    insertCustomersToDB: ( tran: Customer ) => Promise<Customer | null>;
}

const useCustomersStore = create<CustomersState>( ( set, get ) => ( {
    customers: [],
    loading: false,
    error: null,

    // ----------------------------------------------------
    // Load all customers from DB
    // ----------------------------------------------------
    loadCustomers: async () => {
        set( { loading: true, error: null } );

        const { data, error } = await supabase
            .from( 'customers' )
            .select( '*' )

        if ( error ) {
            set( { error: error.message, loading: false } );
            return;
        }

        set( { customers: data || [], loading: false } );
    },

    // ----------------------------------------------------
    // Add to store immediately (UI is instant)
    // ----------------------------------------------------
    addCustomer: ( customers ) =>
        set( ( state ) => ( {
            customers: [ customers, ...state.customers ],
        } ) ),

    // ----------------------------------------------------
    // Insert into Supabase then auto-update store
    // ----------------------------------------------------
    insertCustomersToDB: async ( customers ) => {
        const { data, error } = await supabase
            .from( 'customers' )
            .insert( [ customers ] )
            .select()
            .single();

        if ( error ) {
            console.error( 'Insert error:', error );
            return null;
        }

        // Update UI instantly
        get().addCustomer( data );

        return data;
    },

} ) );

export default useCustomersStore;
