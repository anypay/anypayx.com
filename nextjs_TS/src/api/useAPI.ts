
import useSWR from 'swr';

//const BASE = 'https://anypayx.com/v1/api';
const BASE = 'https://api.anypayinc.com/v1/api';

import axios from '../utils/axios'

function fetcher(params) {
    return axios(params).then(({data}) => {
        console.log('AXIOS', data)
        return data;
    })
}

function useAPI(path) {

    let {data, error, mutate: refresh, isValidating: loading} = useSWR(`${BASE}${path}`, fetcher)

    console.log('FETCHED', data)

    return { data, error, refresh, loading}

}

export { useAPI }