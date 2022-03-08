import * as React from 'react'

import { useSnackbar } from 'notistack';

import { useListInvoices } from '../../api/invoices';

export default function InvoicesList() {

    const { invoices, error, loading, refresh } = useListInvoices();

    const { enqueueSnackbar } = useSnackbar();


    if (error) {

        enqueueSnackbar('Error Loading Payments', { variant: 'warning' })

    }

    if (!invoices && loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>invoices</h2>
            <table>
                <thead/>
                <tbody/>
            </table>
        </div>
    )
    
}