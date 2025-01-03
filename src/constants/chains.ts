export const SUPABASE_URL = 'https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons'

export interface Chain {
  name: string
  ticker: string
  href: string
  logo: string
}

export const chains: Chain[] = [
  { name: 'Bitcoin', ticker: 'BTC', href: '/chains/btc', logo: `${SUPABASE_URL}/btc_50x50.png` },
  { name: 'Ethereum', ticker: 'ETH', href: '/chains/eth', logo: `${SUPABASE_URL}/eth_50x50.png` },
  { name: 'Ripple', ticker: 'XRPL', href: '/chains/xrpl', logo: `${SUPABASE_URL}/xrp_50x50.png` },
  { name: 'Solana', ticker: 'SOL', href: '/chains/sol', logo: `${SUPABASE_URL}/sol_50x50.png` },
  { name: 'Bitcoin Cash', ticker: 'BCH', href: '/chains/bch', logo: `${SUPABASE_URL}/bch_50x50.png` },
  { name: 'Bitcoin SV', ticker: 'BSV', href: '/chains/bsv', logo: `${SUPABASE_URL}/bsv_50x50.png` },
  { name: 'Dogecoin', ticker: 'DOGE', href: '/chains/doge', logo: `${SUPABASE_URL}/doge_50x50.png` },
  { name: 'Litecoin', ticker: 'LTC', href: '/chains/ltc', logo: `${SUPABASE_URL}/ltc_50x50.png` },
  { name: 'Dash', ticker: 'DASH', href: '/chains/dash', logo: `${SUPABASE_URL}/dash_50x50.png` },
  { name: 'Stellar', ticker: 'XLM', href: '/chains/xlm', logo: `${SUPABASE_URL}/xlm_50x50.png` },
  { name: 'Avalanche', ticker: 'AVAX', href: '/chains/avax', logo: `${SUPABASE_URL}/avax_50x50.png` },
  { name: 'Polygon', ticker: 'MATIC', href: '/chains/matic', logo: `${SUPABASE_URL}/matic_50x50.png` },
  { name: 'Binance', ticker: 'BNB', href: '/chains/bnb', logo: `${SUPABASE_URL}/bnb_50x50.png` },
] 