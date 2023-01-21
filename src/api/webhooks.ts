import { BASE } from './useAPI';

import axios from '../utils/axios'

export async function sendWebhook(invoice_uid: string) {

    return axios.post(`${BASE}/webhooks/${invoice_uid}/attempts`)
}

import { useAPI } from './useAPI';

export function useListWebhooks() {

    let { data, error, refresh, loading } = useAPI('/webhooks');

    console.log('USE API', data?.webhooks)

    return { webhooks: data?.webhooks, error, refresh, loading }
}