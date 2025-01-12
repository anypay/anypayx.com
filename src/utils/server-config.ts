const LOCAL_STORAGE_KEY = 'server_config'

export function getServerConfig() {
  // Try to get config from localStorage
  const savedConfig = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (savedConfig) {
    try {
      const config = JSON.parse(savedConfig)
      return {
        apiUrl: config.apiUrl,
        wsUrl: config.wsUrl
      }
    } catch (err) {
      console.error('Failed to parse saved server config:', err)
    }
  }

  // Fall back to environment variables
  return {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.anypayx.com',
    wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'wss://ws.anypayx.com'
  }
} 