// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Card, Stack, Typography, Button, OutlinedInput, useMediaQuery } from '@mui/material';
// components
import Image from './Image';

import { useSnackbar } from 'notistack'
import axios from '../utils/axios';
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

// ----------------------------------------------------------------------

import { API_BASE } from '../api/useAPI'

// ----------------------------------------------------------------------

async function setAddress({ chain, currency, value }: { chain: string, currency: string, value: string }) {
  const response = await axios.post(`${API_BASE}/v1/api/account/addresses`, {
    chain,
    currency,
    value
  })

  if (response.status !== 200 && response.status !== 201) {
    throw new Error('set address error')
  }

  return response
}

async function removeAddress({ chain, currency }: {currency: string, chain: string}) {
  return axios.delete(`${API_BASE}/v1/api/account/addresses/${currency}_${chain}`)
}

// Add interface for coin data
interface CoinData {
  logo_url: string
  name: string
  chain: string
  currency: string
  color?: string
}

export default function SetAddressCard(params: {
  onUpdate: () => void,
  coin: {
    code: string,
    chain: string,
    currency: string,
    address?: string,
    paymail?: string,
    price: number
  }
}) {
  const { onUpdate, coin } = params
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCoinData() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('coins')
        .select('logo_url, name, chain, currency, color')
        .eq('chain', coin.chain)
        .eq('currency', coin.currency)
        .single()

      if (!error && data) {
        setCoinData(data)
      }
      setLoading(false)
    }

    fetchCoinData()
  }, [coin.chain, coin.currency])

  const { enqueueSnackbar } = useSnackbar();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  let address: string;

  // Update icon_url to use coinData
  const icon_url = coin.currency.match('USD') ? (
    coinData?.logo_url
  ) : (
    `https://www.anypayx.com/icons/coins/${coin.chain}.png`
  )

  console.log('ICON', icon_url)

  // Update ContentStyle to use coinData color
  const ContentStyle = styled(Card)(({ theme }) => ({
    marginTop: -120,
    boxShadow: 'none',
    padding: theme.spacing(5),
    paddingTop: theme.spacing(16),
    color: theme.palette.common.white,
    backgroundImage: `linear-gradient(135deg,
      black 0%,
      ${coinData?.color || '#666'} 100%)`,
  }));

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Image
        //@ts-ignore
        visibleByDefault
        disabledEffect
        alt="illustration-invite"
        src={coinData?.logo_url || icon_url}
        sx={{
          left: 40,
          zIndex: 9,
          width: 140,
          position: 'relative',
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))',
        }}
      />
      <ContentStyle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">
            {coinData?.name || coin.code} Wallet Address
          </Typography>
          <Typography variant="h2">${coin.price.toFixed(2)}</Typography>
        </Stack>

        {coin.address == null ?
          <Stack direction={isMobile ? "column" : "row"} spacing={1} alignItems="center" justifyContent="space-between">


          <OutlinedInput
            size="small"
            placeholder='paste your address here'
            sx={{
              width: 1,
              color: 'common.white',
              fontWeight: 'fontWeightMedium',
              bgcolor: (theme) => alpha(theme.palette.common.black, 0.16),
              '& input::placeholder': {
                color: (theme) => alpha(theme.palette.common.white, 0.48),
              },
              '& fieldset': { display: 'none' },
            }}
            onChange={(event) => {
              address = event.target.value;
            }}
          />
          <Button color="warning" variant="contained" onClick={() => {
            
            enqueueSnackbar(`Activating ${coin.code} address ${address}`);

            setAddress({
              chain: coin.chain,
              currency: coin.currency,
              value: address
            }).then((result) => {
              //@ts-ignore
              enqueueSnackbar(`Success setting ${coin.name} address to ${address}`, { variant: 'success'});

              onUpdate();

            }).catch((error) => {

              console.error('address.set.error', error)

              enqueueSnackbar(`Error setting ${coin.code} address to ${address}`, { variant: 'error'});

            })
          }}>
            Activate
          </Button>
        </Stack>
        :
        <Stack direction={isMobile ? "column" : "row"} spacing={1} alignItems="center" justifyContent="space-between">

        <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
          {coin.address}
          {!!coin.paymail &&
            <span className='paymail'><br/><i>{coin.paymail}</i></span>
          }
        </Typography>

        <Button color="warning" variant="contained" onClick={() => {
            enqueueSnackbar(`Removing ${coin.code} address ${coin.address}`);

            removeAddress({ chain: coin.chain, currency: coin.currency }).then((result) => {

              console.log('address.remove.result', result)

              enqueueSnackbar(`${coin.code} address ${coin.address} removed`, { variant: 'success'});

              onUpdate();

            }).catch((error) => {

              // the logger should log system logs over the a websocket connection to some
              // system monitoring server.

              console.log('address.remove.error', error)

              alert('caught error')

              enqueueSnackbar(`Error removing ${coin.code} address`, { variant: 'warning'});

            })
        }}>
          Remove
        </Button>
      </Stack>

        }


      </ContentStyle>
    </div>
  );
}
