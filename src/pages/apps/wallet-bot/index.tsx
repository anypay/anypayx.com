
import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  CardHeader,
  Stack,
  Container,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Box,
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';

import TrendingUpCard from '../../../components/TrendingUpCard'

import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';

import * as React from 'react';

import { styled } from '@mui/material/styles';

import NewWalletBotPaymentDialog from '../../../components/payments/NewWalletBotPaymentDialog'

import useWalletBot, { AddressBalance } from '../../../hooks/useWalletBot'

import { useEffect, useState } from 'react'
import WalletBotBalances from 'src/components/wallet-bot/WalletBotBalances';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import PaymentsList from 'src/components/payments/PaymentsList';
import Link from 'next/link';

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

export default function WalletBotDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { counts, token, loading, data, error, listPaid, connected, status, paid, unpaid, cancelled, refresh, listAddressBalances } = useWalletBot()

  const [showByStatus, setShowByStatus] = useState<string>('paid')

  const [addressBalances, setAddressBalances] = useState<AddressBalance[]>([]);

  const [payments, setPayments] = useState<any[]>([])

  useEffect(() => {
    if (loading) { return }

    listPaid({ limit: 100, offset: 0 }).then((paid) => {

        console.log('PAID', paid)
        setPayments(paid)
    })
}, [loading])

  useEffect(() => {
    if (loading) { return }
    listAddressBalances().then((balances) => {
      console.log('BALANCES', balances)
      setAddressBalances(balances)
    })
    .catch(error =>{
        enqueueSnackbar('Error Loading Wallet Bot Balance History', { variant: 'warning' })
    })
  }, [loading])


  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  if (!data) {
    return <></>
  }

  console.log({ status, connected })

  const StatusCard = status === 'connected' ? ConnectedStatusCard : DisconnectedStatusCard;

  var balances = data?.balances || []

  balances = balances.filter(balance => !!balance)


  async function onPaymentRequestCreated() {


    await refresh()
  }

  return (
    <Page title="Wallet Bot: Dashboard">
      <Container maxWidth={themeStretch ? false : 'lg'}>
      <HeaderBreadcrumbs
            heading="Wallet Bot"
            links={[
              { name: 'Apps', href: '/apps' },
              { name: 'Wallet Bot', },
            ]}
          />

        <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>

<Grid container spacing={2}>

  <Grid item  xs={6} sm={6} md={3}>
  <StyledCard
    onClick={() => setShowByStatus('unpaid')}
    sx={{ border: showByStatus === 'unpaid' ? '2px solid #ccc' : '0px'}}>
      <CardHeader title="Pending"/>

      <Stack spacing={2} sx={{ p: 3 }}>
        {counts === null ? (
          <h1>?</h1>
        ): (
          <h1>{counts.unpaid || 0}</h1>
        )}
      </Stack>
    </StyledCard>
  </Grid>


  <Grid item  xs={6} sm={6} md={3}>
  <StyledCard
    onClick={() => setShowByStatus('cancelled')}
    sx={{ border: showByStatus === 'cancelled' ? '2px solid #ccc' : '0px'}}>   
      <CardHeader title="Cancelled"/>

      <Stack spacing={2} sx={{ p: 3 }}>
        {counts === null ? (
          <h1>?</h1>
        ): (
          <h1>{counts.cancelled || 0}</h1>
        )}
      </Stack>
    </StyledCard>
  </Grid>


  <Grid item  xs={6} sm={6} md={3}>
  <StyledCard
    onClick={() => setShowByStatus('paid')}
    sx={{ border: showByStatus === 'paid' ? '2px solid #ccc' : '0px'}}>                  
    <CardHeader title="Paid"/>

      <Stack spacing={2} sx={{ p: 3 }}>
        {counts === null ? (
          <h1>?</h1>
        ): (
          <h1>{counts.paid || 0}</h1>
        )}
      </Stack>
    </StyledCard>
  </Grid>
  

</Grid>

</Grid>

<Grid item   xs={12} sm={6} md={3}>
<StyledCard>
  <CardHeader title="Token" />

  <Stack spacing={1} sx={{ p: 1 }}>
    <Typography variant="body2">{data?.access_token}</Typography>

  </Stack>
</StyledCard>
</Grid>




        {!loading && addressBalances && (

          <Grid item  xs={12} sm={12} md={12}>

              <Typography>
                <h2><Link href={'/apps/wallet-bot/balances'}>Address Balances</Link></h2>
              </Typography>

            <WalletBotBalances balances={addressBalances} />

          </Grid>
          )}


          {paid && showByStatus === 'paid' && (
            
            <Grid item  xs={12} sm={12} md={12}>
              <Typography>
                <h2><Link href={'/apps/wallet-bot/payments'}>Payments History</Link></h2>
              </Typography>
              {payments && <PaymentsList payments={payments} />}            
            </Grid>
          )}





        </Grid>

      </Container>
    </Page>
  );
}