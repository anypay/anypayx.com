
import { useAPI } from './useAPI';

export function useListInvoices() {

    let { data: invoices, error, loading, refresh } = useAPI('/account/invoices');

    return { invoices, error, refresh, loading }
}

export function useInvoice(uid: any) {

    let { data: invoice, error, loading, refresh } = useAPI(`/account/invoices/${uid}`);

    return { invoice, error, refresh, loading }
    
}
