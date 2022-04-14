import { useState } from 'react';
import { useSnackbar } from 'notistack';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Container,
  Stack
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

// _mock_
import { _userList } from '../../../_mock';
// api data
import useSWR from 'swr';
import axios from '../../../utils/axios';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';


// sections

import SetAddressCard from '../../../components/SetAddressCard'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'invoice', label: 'Invoice', alignRight: false },
  { id: 'url', label: 'URL', alignRight: false },
  { id: 'attempts', label: 'Attempts', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

WalletAddresses.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WalletAddresses() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { data, error } = useSWR('https://api.anypayx.com/v1/api/account/addresses', axios)


  if (error) {

    enqueueSnackbar('Error Loading Addresses', { variant: 'warning' })

  }

  if (!data) {

      return (<div>Loading Coins...</div>)
  }

  console.log('coins data', data)

  const coins = data?.data.addresses.filter((coin: any) => coin.enabled)

  console.log({ coins })

  /*const coins = [{
    code: 'DASH',
    name: 'DASH',
    color: '#008de4',
    icon: 'https://anypayinc.s3.amazonaws.com/icons/dash.png',
    price: 102.82305
  }, { 
    code: 'BCH',
    name: 'Bitcoin Cash',
    color: '#8dc251',
    icon: 'https://anypayinc.s3.amazonaws.com/icons/bch.png',
    address: 'mybchaddress',
    price: 334.89255
  }]*/


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
 
            {coins.map((coin: any, key: any) => {
              <span key={coin.code}>
                return <SetAddressCard coin={coin}/>
              </span>
            })}

        </Stack>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------
