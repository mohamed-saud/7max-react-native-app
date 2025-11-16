import { supabase } from '@/lib/supabase';
import { create } from 'zustand';

export interface Transaction {
    id?: string;
    amount: number;
    created_at?: string;
    createdBy: string;
    customerId: string;
    note?: string;
}

interface TransactionsState {
    transactions: Transaction[];
    loading: boolean;
    error: string | null;

    loadTransactions: () => Promise<void>;
    loadTransactionsWithCustomers: () => Promise<void>;
    addTransaction: ( tran: Transaction ) => void;
    insertTransactionToDB: ( tran: Transaction ) => Promise<Transaction | null>;
}

const useTransactionsStore = create<TransactionsState>( ( set, get ) => ( {
    transactions: [],

    loading: false,
    error: null,

    // ----------------------------------------------------
    // Load all transactions from DB
    // ----------------------------------------------------
    loadTransactions: async () => {
        set( { loading: true, error: null } );

        const { data, error } = await supabase
            .from( 'transactions' )
            .select( '*' )

        if ( error ) {
            set( { error: error.message, loading: false } );
            return;
        }

        set( { transactions: data || [], loading: false } );
    },

    // ----------------------------------------------------
    // Add to store immediately (UI is instant)
    // ----------------------------------------------------
    addTransaction: ( tran ) =>
        set( ( state ) => ( {
            transactions: [ tran, ...state.transactions ],
        } ) ),

    // ----------------------------------------------------
    // Insert into Supabase then auto-update store
    // ----------------------------------------------------
    insertTransactionToDB: async ( tran ) => {
        const { data, error } = await supabase
            .from( 'transactions' )
            .insert( [ tran ] )
            .select()
            .single();

        if ( error ) {
            console.error( 'Insert error:', error );
            return null;
        }

        // Update UI instantly
        get().addTransaction( data );

        return data;
    },
    loadTransactionsWithCustomers: async () => {
        set( { loading: true, error: null } );

        const { data, error } = await supabase
            .from( 'transactions' )
            .select( `
      id,
      amount,
      created_at,
      customerId,
      customers (
        id,
        fullName,
        phone
      )
    `);


        if ( error ) {
            console.log( "❌ Error:", error );
            return;
        }

        set( { transactions: data || [], loading: false } );

    }

} ) );

export default useTransactionsStore;
