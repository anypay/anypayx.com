import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

import { Box } from '@mui/system';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  Card,
  CardContent,
  Table,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableHead,
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

import { useRouter } from "next/router";
import { isDataView } from 'util/types';


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

ShowInvoice.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ShowInvoice() {

  const { query } = useRouter();
    
  const { enqueueSnackbar } = useSnackbar();

  const { events } = useWebsocket();

  const { themeStretch } = useSettings();

  const { user } = useAuth();


  console.log('query', query)

  const { data, error } = useSWR(`https://api.anypayx.com/v1/api/invoices/${query.invoice_uid}`, axios)


  if (!data && !error) {
    return <LoadingScreen />;
  }

  if (error) {
      return <p>Error: {error.message}</p>
  }

  console.log('__data', data)

  var { invoice, payment } = data.data;

  invoice = Object.assign(invoice, { uid: query.invoice_uid })

  const checkoutURL = `https://anypayx.com/app/#/pay/${user?.id}`

  const heading = `Invoice # ${query.invoice_uid}`

  return (
    <Page title="Payments: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={heading}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Invoices' },
            { name: 'Payment Details' }
          ]}
          action={

            <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
                <Button variant="contained" startIcon={<Iconify icon={'eva:paper-plane-outline'} />}>
                Share Invoice
              </Button>
            </a>

          }
        />
        <InvoiceDetails invoice={invoice} payment={payment}/>

        <InvoiceEvents invoice={invoice} />

      </Container>
    </Page>
  );
}

function InvoiceDetails({ invoice, payment }) {
    return (
    <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>{invoice.uid}</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          {invoice.amount} {invoice.currency}
        </Box>
        {payment && (
            <>
            <Box
                sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
                }}
            >
                PAID
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                {payment.currency}
            </Box>
            <Box sx={{ fontWeight: 100 }}>
                {payment.txid}
            </Box>
            </>
        )}
        {!payment && (
            <>
            <Box
                sx={{
                color: 'warning.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
                }}
            >
                NOT PAID
            </Box>
            </>
        )}

      </Box>
    )
}

function InvoiceEvents({ invoice }) {

    const { data, error } = useSWR(`https://api.anypayx.com/v1/api/invoices/${invoice.uid}/events`, axios)

    /*if (error) {
        return (
            <Card>

                <p>Error: {error.message}</p>
            </Card>
        )
    }

    if (!data) {
        return (
            <Card>
                <p>loading...</p>
            </Card>
        )
    }*/

    console.log('invoice.events', data);

    const events = []

    const hasEvents = events.length > 0

    return (
        <>
        {hasEvents && (
            <Card>
            <Scrollbar>
                <TableContainer sx={{ minWidth: 400 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>Payload</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((event) => (
                                <TableRow>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.payload}</TableCell>
                                    <TableCell>{event.createdAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>
        </Card>
        )}
        </>


    )


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
