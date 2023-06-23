import { useSnackbar } from 'notistack';
// next
// @mui
import {
  Container,
  Stack
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

// api data
import useSWR from 'swr';
import axios from '../../../utils/axios';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import { API_BASE } from '../../../api/useAPI'

// sections

import SetAddressCard from '../../../components/SetAddressCard'
import LoadingScreen from '../../../components/LoadingScreen';


// ----------------------------------------------------------------------

WalletAddresses.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WalletAddresses() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { data, error, mutate } = useSWR(`${API_BASE}/v1/api/account/addresses`, axios)


  if (error) {

    enqueueSnackbar('Error Loading Addresses', { variant: 'warning' })

  }

  if (!data) {
      return <LoadingScreen/>
      
  }

  const coins = data?.data.addresses
    .filter((coin: any) => !!coin.price)
    .filter((coin: any) => {
      return coin.code !== 'USDC' && coin.code !== 'USDT'
    })
  
  return (
    <Page title="Wallets: Setup">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Coin Wallet Addresses"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Management' },
            { name: 'Wallet Addresses' }
          ]}
        />
        <Stack spacing={2}>
 
            {coins.map((coin: any, key: any) => (
              <span key={coin.code}>
                <SetAddressCard coin={coin} onUpdate={() => {

                  mutate();
                }} />
              </span>
            ))}

        </Stack>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------
