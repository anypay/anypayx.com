


import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  Container,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Avatar,
  TableHead
} from '@mui/material';

import moment from 'moment'
// hooks
import useSettings from '../../../hooks/useSettings';

import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';

import * as React from 'react';

import { styled } from '@mui/material/styles';

import useWalletBot from '../../../hooks/useWalletBot'

import { useEffect, useState } from 'react'

import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';

import Scrollbar from 'src/components/Scrollbar';

import WalletBotMoreMenu from 'src/sections/@dashboard/payments/list/WalletBotMoreMenu';

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

import { AddressBalance } from '../../../hooks/useWalletBot';
import { useRouter } from 'next/router';
import WalletBotPaymentsList from 'src/components/payments/WalletBotPaymentsList';

interface Payment {
    hash: string;
    uid: string;
}

export default function WalletBotDashboard() {

  const { enqueueSnackbar } = useSnackbar();

  const { themeStretch } = useSettings();

  const { data, error, loading, listAddressBalances, listUnpaid, listPaid } = useWalletBot()

  useEffect(() => {
    if (!data) { return }
    listAddressBalances().then((balances) => {
      setAddressBalances(balances)
    })
  }, [data])

  const { push } = useRouter()

  const [addressBalances, setAddressBalances] = useState<AddressBalance[]>([]);

  const [payments, setPayments] = useState<any[]>([])

    useEffect(() => {
        if (loading) { return }

        listUnpaid({ limit: 100, offset: 0 }).then((unpaid) => {

            console.log('UNPAID', unpaid)
            setPayments(unpaid)
        })
    }, [loading])

  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  if (!data) {
    return <></>
  }

  const TABLE_HEAD = [
    { id: 'chain', label: 'Chain', alignRight: false },
    { id: 'currency', label: 'Currency', alignRight: false },
    { id: 'address', label: 'Address', alignRight: false },
    { id: 'balance', label: 'Balance', alignRight: false },
    { id: 'usd_balance', label: 'USD Balance', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
  ];

  function handleRowClicked(row: AddressBalance) {
    push(`/apps/wallet-bot/balances/${row.chain}/${row.currency}/${row.address}`)
  }

  if (!payments) {
    return <>Loading</>
  }

  return (
    <Page title="Wallet Bot: Pending Payments">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Wallet Bot Pending Payments"
            links={[
              { name: 'Apps', href: '/apps' },
              { name: 'Wallet Bot', href: '/apps/wallet-bot' },
              { name: 'Pending Payments' }
            ]}
          />

            <WalletBotPaymentsList payments={payments} />
        </Container>
    </Page>
  );
}
