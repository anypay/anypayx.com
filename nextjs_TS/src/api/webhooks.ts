const BASE = 'https://api.anypayinc.com/v1/api';

import axios from '../utils/axios'

export async function sendWebhook(invoice_uid: string) {

    return axios.post(`${BASE}/webhooks/${invoice_uid}/attempts`)
}