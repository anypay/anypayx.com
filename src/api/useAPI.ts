
import useSWR from 'swr';

export const DOMAIN = process.env.DOMAIN || 'anypayx.com'

export const BASE = process.env.API_BASE || `https://api.anypayx.com`;

//export const BASE = `http://localhost:5200`;


const API_BASE = BASE

export { API_BASE }

import axios from '../utils/axios'

export { axios }

export function fetcher(params: any) {
    return axios(params).then(({data}) => {
        return data;
    })
}

export function useAPIFromRoot(path: string) {

    let { data, error, mutate: refresh, isValidating: loading } = useSWR(path, fetcher)
    
    return { data, error, refresh, loading}

}

export function useAPI(path: string, options?:any) {

    let data, error, refresh, loading;

    let fetch = fetcher

    if (options) {

        fetch = (params) => {

            return axios(params, options)
        }

    }
        
    const result = useSWR(`${API_BASE}${path}`, fetch)

    data = result.data;

    error = result.error;

    refresh = result.mutate;

    loading = result.isValidating;

    return { data, error, refresh, loading }

}
