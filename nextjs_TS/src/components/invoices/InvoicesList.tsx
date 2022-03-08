import * as React from 'react'

import { useListInvoices } from '../../api/invoices';

export default function InvoicesList() {

    let { invoices, error, isValidating, mutate } = useListInvoices();

    

    if (!invoices && isValidating) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>invoices</h2>
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
    
}