
import { useAPI } from './useAPI';

export function useListPayments() {

    let { data, error, refresh, loading } = useAPI('/account/payments');

    console.log('USE API', data?.payments)

    return { payments: data?.payments, error, refresh, loading }
}