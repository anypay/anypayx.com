
import useSWR from 'swr';

//const BASE = 'https://anypayx.com/v1/api';
const BASE = 'https://api.anypayinc.com/v1/api';

import axios from '../utils/axios'

function fetcher(params: any) {
    return axios(params).then(({data}) => {
        return data;
    })
}

function useAPI(path: string) {

    let {data, error, mutate: refresh, isValidating: loading} = useSWR(`${BASE}${path}`, fetcher)
    
    return { data, error, refresh, loading}

}

export { useAPI }