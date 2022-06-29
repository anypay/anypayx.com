import axios from '../utils/axios'

import { BASE } from './useAPI';

export async function searchAccount(search: string): Promise<any[]> {

    let { data } = await axios.post(`${BASE}/search`, { search })

    return data.result
    
}
