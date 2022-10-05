
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
  Box
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

import useWalletBot from '../../../hooks/useWalletBot'

import { useState } from 'react'

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

  const { counts, token, data, error, connected, status, paid, unpaid, cancelled, refresh } = useWalletBot()

  console.log({ counts, token, data, error, connected, status, paid, unpaid, cancelled, refresh })

  const [showByStatus, setShowByStatus] = useState<string>('paid')

  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  if (!data) {
    return <></>
  }

  console.log({ status, connected })

  const StatusCard = status === 'connected' ? ConnectedStatusCard : DisconnectedStatusCard;

  async function payNow() {


  }

  var balances = data?.balances || []

  balances = balances.filter(balance => !!balance)


  async function onPaymentRequestCreated() {


    await refresh()
  }

  return (
    <Page title="Wallet Bot: Dashboard">
      <Container maxWidth={themeStretch ? false : 'lg'}>

        <Grid container spacing={2}>
          <Grid item md={3} lg={4}>
            <Card>
              <Box sx={{backgroundColor: '#444444', height: '140px', display: 'flex'}}>
                <Img src="https://doge.bitcoinfiles.org/ea8205469186c12f6b23866d3ef50ab84f6f6b82dab43075e0229ab32ca6f5bc"/>
              </Box>
            </Card>
          </Grid>
          <Grid item   xs={6} sm={4} md={3} lg={2}>

            <StatusCard>
              <CardHeader />

              <Stack spacing={2} sx={{ p: 3 }}>
                <Typography variant="body2">
                  <h2><b>{capitalizeFirstLetter(data?.wallet_bot.status)}</b></h2>
                </Typography>

              </Stack>
              </StatusCard>

          </Grid>
          {status === 'connected' && (
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <StyledPayNowCard onClick={payNow}>
              <CardHeader />

              <Stack spacing={2} sx={{ p: 3 }}>

                <Typography variant="body2">
                  <NewWalletBotPaymentDialog onPaymentRequestCreated={onPaymentRequestCreated} />              
                </Typography>
              </Stack>
              </StyledPayNowCard>
            </Grid>
          )}

          <Grid item  xs={4} sm={3} md={3} lg={2}>
            <StyledCard>
              <CardHeader />

              <Stack spacing={2} sx={{ p: 3 }}>
                <a target='_blank'  rel="noreferrer" href='https://github.com/anypay/wallet-bot'><IconImg src={'https://imgs.search.brave.com/WBmzxaghxwDdiyR2hX18EBpTe0cCmBPP1lf0fkLISw0/rs:fit:1200:1156:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL2dp/dGh1Yl9QTkcyMC5w/bmc'}/></a>
              </Stack>
            </StyledCard>
          </Grid>
          <Grid item   xs={4} sm={3} md={3} lg={2}>
            <StyledCard>
              <CardHeader/>

              <Stack spacing={2} sx={{ p: 3 }}>
                <a target='_blank'  rel="noreferrer"  href='https://hub.docker.com/r/anypay/wallet-bot'><IconImg src={'/icons/docker_200_170.png'}/></a>

              </Stack>
            </StyledCard>
          </Grid>

        {balances && (

          <Grid item  xs={12} sm={12} md={12}>
            <Card>
            <CardHeader sx={{textAlign: 'center', padding: '1em'}} title="Balances" />

              <Table>

                  <TableBody>
                  {balances.map((balance) => (
                    (balance && balance.address && (
                        <TableRow key={`${balance?.asset}-${balance?.address}`}>
                            <TableCell>{balance?.asset}</TableCell>
                            <TableCell>${balance?.value_usd}</TableCell>
                            <TableCell>{balance?.address}</TableCell>
                            <TableCell>:</TableCell>

                        </TableRow>))
                    ))}
                  </TableBody>
              </Table>
            </Card>
          </Grid>
          )}

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

              <Stack spacing={2} sx={{ p: 3 }}>
                <Typography variant="body2">{data?.access_token}</Typography>

              </Stack>
            </StyledCard>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card>
              <TrendingUpCard/>
            </Card>
          </Grid>

          {paid && showByStatus === 'paid' && (

            <Grid item  xs={12} sm={6} md={6}>
              <Card>
              <CardHeader sx={{textAlign: 'center', padding: '1em'}} title="Completed Payments" />

                <Table>
                    <TableBody>
                    {paid.invoices && paid.invoices.map((balance) => (
                          <TableRow key={`${balance.asset}-${balance.address}`}>
                              <TableCell>{balance.createdAt}</TableCell>
                              <TableCell>{balance.uid}</TableCell>
                              <TableCell>:</TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                </Table>
              </Card>
            </Grid>
          )}


        {cancelled && showByStatus === 'cancelled' && (

        <Grid item  xs={12} sm={6} md={6}>
          <Card>
          <CardHeader sx={{textAlign: 'center', padding: '1em'}} title="Cancelled Payments" />

          <Table>
                    <TableBody>
                    {cancelled.invoices && cancelled.invoices.map((balance) => (
                          <TableRow key={`${balance.asset}-${balance.address}`}>
                              <TableCell>{balance.createdAt}</TableCell>
                              <TableCell>{balance.uid}</TableCell>
                              <TableCell>:</TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                </Table>
          </Card>
        </Grid>
        )}

          {unpaid && showByStatus === 'unpaid' && (

          <Grid item  xs={12} sm={6} md={6}>
            <Card>
            <CardHeader sx={{textAlign: 'center', padding: '1em'}} title="Unpaid Payments" />

            <Table>
                    <TableBody>
                    {unpaid.invoices && unpaid.invoices.map((balance) => (
                          <TableRow key={`${balance.asset}-${balance.address}`}>
                              <TableCell>{balance.createdAt}</TableCell>
                              <TableCell>{balance.uid}</TableCell>
                              <TableCell>:</TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </Card>
          </Grid>
          )}

        </Grid>

      </Container>
    </Page>
  );
}
