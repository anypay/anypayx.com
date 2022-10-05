
import { useAPI, BASE } from './useAPI';

import axios from '../utils/axios'

export function useListInvoices() {

    let { data: invoices, error, loading, refresh } = useAPI('/account/invoices');

    return { invoices, error, refresh, loading }
}

export function useInvoice(uid) {

    let { data: invoice, error, loading, refresh } = useAPI(`/account/invoices/${uid}`);

    return { invoice, error, refresh, loading }
    
}

interface NewInvoice {
    amount: number;
}

export async function createInvoice({ amount }: NewInvoice) {

    let { data } = await axios.post(`${BASE}/invoices`, {
        amount
    })

    return data.invoice
    
}

