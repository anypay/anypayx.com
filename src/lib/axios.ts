import axios from 'axios'
import { createClient } from '@/utils/supabase/client'

const axiosInstance = axios.create({
  baseURL: 'https://api.anypayx.com'
})

// Add a request interceptor
axiosInstance.interceptors.request.use(async (config) => {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  
  if (session?.access_token) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = `Bearer ${session.access_token}`
  }
  
  return config
})

export default axiosInstance 