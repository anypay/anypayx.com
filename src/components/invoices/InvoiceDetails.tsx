import React from 'react'

import { useSnackbar } from 'notistack';

import { useInvoice } from '../../api/invoices'

export default function InvoiceDetails() {

    const { enqueueSnackbar } = useSnackbar();    

    const { invoice, error, loading } = useInvoice('12345');

    if (!invoice && loading) {
        return <div>Loading...</div>
    }
    if (error) {

        enqueueSnackbar('Error Loading Invoice', { variant: 'warning' })

    }

    return (
        <div>
            <h2>Invoice ID: {invoice.uid}</h2>
            <table>
                <thead/>
                <tbody/>
            </table>
        </div>
    )

}