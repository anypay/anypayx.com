


import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  Container
} from '@mui/material';

// hooks
import useSettings from 'src/hooks/useSettings';

import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import * as React from 'react';

import { styled } from '@mui/material/styles';

import useWalletBot from 'src/hooks/useWalletBot'

import { useEffect, useState } from 'react'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Scrollbar from 'src/components/Scrollbar';
import PaymentsMoreMenu from 'src/sections/@dashboard/payments/list/PaymentsMoreMenu';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '140px',
});

const IconImg = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  height: '50px',
});

const gray = styled('div')({
  backgroundColor: '#ccc'
})

const StyledCard = styled(Card)({
  height: 140,
  textAlign: 'center'
})

const BaseStatusCard = styled(StyledCard)({
  color: '#fff'
})

const DisconnectedStatusCard = styled(BaseStatusCard)({
  backgroundColor: '#E9574E'
})

const ConnectedStatusCard = styled(BaseStatusCard)({
  backgroundColor: '#029454'
})

const StyledPayNowCard = styled(StyledCard)({
  cursor: 'pointer'
})

// ----------------------------------------------------------------------

WalletBotDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

import { AddressBalance } from 'src/hooks/useWalletBot';
import { useRouter } from 'next/router';
import WalletBotBalances from 'src/components/wallet-bot/WalletBotBalances';

export default function WalletBotDashboard() {

  const { enqueueSnackbar } = useSnackbar();

  const { themeStretch } = useSettings();

  const { loading, listAddressBalanceHistory } = useWalletBot()

  const { push, query } = useRouter()

  const [addressBalances, setAddressBalances] = useState<AddressBalance[]>([]);

  useEffect(() => {
    if (loading) { return }
    listAddressBalanceHistory(query).then((balances) => {
      console.log('BALANCES', balances)
      setAddressBalances(balances)
    })
    .catch(error =>{
        enqueueSnackbar('Error Loading Wallet Bot Balance History', { variant: 'warning' })
    })
  }, [loading])

  const { chain, currency, address } = query

  return (
    <Page title="Wallet Bot: Balances">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading={`Wallet Bot Balance History`}
            links={[
              { name: 'Wallet Bot', href: '/apps/wallet-bot' },
              { name: 'Balances', href: `/apps/wallet-bot/balances` },
              { name: String(chain), href: `/apps/wallet-bot/balances` },
              { name: String(currency), href: `/apps/wallet-bot/balances` },
              { name: String(address) }
            ]}
          />
        <WalletBotBalances balances={addressBalances} />
        
        </Container>
    </Page>
  );
}
