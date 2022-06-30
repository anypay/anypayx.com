
import { useAPI } from './useAPI';

export function useAccountLogs() {

    let { data, error, refresh, loading } = useAPI('/account/events');

    console.log('USE API', data?.events)

    return { entries: data?.events, error, refresh, loading }
}