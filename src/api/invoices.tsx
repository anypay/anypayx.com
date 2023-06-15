
import { useAPI, API_BASE } from './useAPI';

import axios from '../utils/axios'

export function useListInvoices() {

    let { data: invoices, error, loading, refresh } = useAPI('/v1/api/account/invoices');

    return { invoices, error, refresh, loading }
}

export function useInvoice(uid) {

    let { data: invoice, error, loading, refresh } = useAPI(`/v1/api/account/invoices/${uid}`);

    return { invoice, error, refresh, loading }
    
}

interface NewInvoice {
    amount: number;
}

export async function createInvoice({ amount }: NewInvoice) {

    let { data } = await axios.post(`${API_BASE}/v1/api/invoices`, {
        amount
    })

    return data.invoice
    
}

