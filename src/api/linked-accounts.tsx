
import { useAPI } from './useAPI';

function refresh() {

}

var loading = false

var error = null

export function useLinkedAccounts() {

    let { data, error, refresh, loading } = useAPI('/linked-accounts');


    const { linked_accounts } = data

    return {
        data,
        error,
        refresh,
        loading
    }
}