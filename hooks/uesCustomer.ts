import { supabase } from '@/lib/supabase';
import { useCallback, useEffect, useState } from 'react';

export interface Customer {
    id: number;
    name: string;
    balance: number;
    // Add any other fields you have in your 'customers' table
}

export function useGetCustomers( autoFetch = true ) {
    const [ customers, setCustomers ] = useState<Customer[]>( [] );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState<string | null>( null );

    // Function to fetch customers
    const getCustomers = useCallback( async () => {
        setLoading( true );
        setError( null );

        const { data, error } = await supabase.from( 'customers' ).select( '*' );

        if ( error ) {
            console.error( '❌ Supabase error:', error.message );
            setError( error.message );
            setCustomers( [] );
        } else {
            setCustomers( data || [] );
        }

        setLoading( false );
    }, [] );

    // Auto fetch on mount
    useEffect( () => {
        if ( autoFetch ) getCustomers();
    }, [ autoFetch, getCustomers ] );

    return { customers, loading, error, refresh: getCustomers };
}

export function useGetCustomer( autoFetch = true, id: Number ) {
    const [ customers, setCustomers ] = useState<Customer[]>( [] );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState<string | null>( null );

    // Function to fetch customers
    const getCustomers = useCallback( async () => {
        setLoading( true );
        setError( null );

        const { data, error } = await supabase.from( 'customers' ).select( '*' );

        if ( error ) {
            console.error( '❌ Supabase error:', error.message );
            setError( error.message );
            setCustomers( [] );
        } else {
            setCustomers( data || [] );
        }

        setLoading( false );
    }, [] );

    // Auto fetch on mount
    useEffect( () => {
        if ( autoFetch ) getCustomers();
    }, [ autoFetch, getCustomers ] );

    return { customers, loading, error, refresh: getCustomers };
}
