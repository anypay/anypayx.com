import axios from '../utils/axios'

import { API_BASE } from './useAPI';

export async function searchAccount(search: string): Promise<any[]> {

    let { data } = await axios.post(`${API_BASE}/search`, { search })

    return data.result
    
}
