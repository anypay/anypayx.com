import axios from '../utils/axios'

const BASE = 'https://api.anypayx.com/v1/api';

export async function searchAccount(search: string): Promise<any[]> {

    let { data } = await axios.post(`${BASE}/search`, { search })

    return data
    
}
