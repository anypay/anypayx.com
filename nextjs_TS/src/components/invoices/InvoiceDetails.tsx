import React from 'react'

import { useInvoice } from '../../api/invoices'

export default function InvoiceDetails({ uid: string }) {

    let { invoice, error, loading, refresh } = useInvoice();

    if (!invoice && loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Invoice ID: {invoice.uid}</h2>
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )

}