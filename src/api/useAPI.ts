
import useSWR from 'swr';

export const DOMAIN = 'api.anypayx.com'

//export const BASE = `https://${DOMAIN}/v1/api`;

export const BASE = process.env.API_BASE || `http://localhost:8000/v1/api`;
//export const BASE = process.env.API_BASE || `https://api_next.anypayx.com/v1/api`;

const API_BASE = BASE

import axios from '../utils/axios'

export { axios }

export function fetcher(params: any) {
    return axios(params).then(({data}) => {
        return data;
    })
}

export function useAPI(path: string) {

    let {data, error, mutate: refresh, isValidating: loading} = useSWR(`${API_BASE}${path}`, fetcher)
    
    return { data, error, refresh, loading}

}

