import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  Card,
  Table,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// @types
import { UserManager } from '../../../@types/user';
// api data
import useAuth from '../../../hooks/useAuth';
import useSWR from 'swr';
import axios from '../../../utils/axios';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import LoadingScreen from '../../../components/LoadingScreen';
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import SearchNotFound from '../../../components/SearchNotFound';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import PaymentsList from '../../../components/payments/PaymentsList'

import { useListPayments } from '../../../api/payments';

import useWebSocket, { ReadyState } from 'react-use-websocket';

import useWebsocket from '../../../hooks/useWebsocket';


// sections

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

WebhooksList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WebhooksList() {
  
  const { enqueueSnackbar } = useSnackbar();

  const { events } = useWebsocket();

  const { themeStretch } = useSettings();

  const { user } = useAuth();

  const checkoutURL = `https://anypayx.com/app/#/pay/${user?.id}`

  return (
    <Page title="Payments: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="My Payments Received"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Merchant' },
            { name: 'Payments Received' }
          ]}
          action={

            <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
                <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                Quick Checkout
              </Button>
            </a>

          }
        />
        <PaymentsList/>

      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

type Anonymous = Record<string | number, string>;

function descendingComparator(a: Anonymous, b: Anonymous, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a: Anonymous, b: Anonymous) => descendingComparator(a, b, orderBy)
    : (a: Anonymous, b: Anonymous) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(
  array: UserManager[],
  comparator: (a: any, b: any) => number,
  query: string
) {
  const stabilizedThis = array.map((el, index) => [el, index] as const);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
