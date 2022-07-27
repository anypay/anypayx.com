
import useSWR from 'swr';

export const DOMAIN = 'api_next.anypayx.com'

export const BASE = `https://${DOMAIN}/v1/api`;

import axios from '../utils/axios'

export function fetcher(params: any) {
    return axios(params).then(({data}) => {
        return data;
    })
}

export function useAPI(path: string) {

    let {data, error, mutate: refresh, isValidating: loading} = useSWR(`${BASE}${path}`, fetcher)
    
    return { data, error, refresh, loading}

}

