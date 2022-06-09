import { Box } from '@mui/system';

import Moment from 'moment';
import Script from 'next/script'
import {
  Card,
  Table,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  TableContainer,
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
import LoadingScreen from '../../../components/LoadingScreen';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import { useRouter } from "next/router";

// ----------------------------------------------------------------------

ShowInvoice.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ShowInvoice() {

  const { query } = useRouter();
    
  const { themeStretch } = useSettings();

  const { data, error } = useSWR(`https://api.anypayx.com/v1/api/invoices/${query.invoice_uid}`, axios)

  if (!data && !error) {
    return <LoadingScreen />;
  }

  if (error) {
      return <p>Error: {error.message}</p>
  }

  const { invoice, payment, kraken_deposits } = data?.data;

  invoice['uid'] = query.invoice_uid

  const shareInvoiceUrl = `https://anypay.sv/invoices/${invoice.uid}`

  const heading = `Invoice # ${query.invoice_uid}`

  return (
    <Page title="Invoice: Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={heading}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Invoices', href: '/dashboard/merchant/payments' },
            { name: 'Payment Details' }
          ]}
          action={

            <a target="_blank" href={shareInvoiceUrl} rel="noopener noreferrer">
              <Button variant="contained" startIcon={<Iconify icon={'eva:paper-plane-outline'} />}>
                Share Invoice
              </Button>
            </a>            

          }
        />


        <InvoiceDetails invoice={invoice} payment={payment}/>
        <KrakenDeposits deposits={kraken_deposits} />
        <InvoiceEvents invoice={invoice} />

      </Container>
    </Page>
  );
}

interface Invoice {
    uid: string;
    amount: number;
    currency: string;
    createdAt: Date;
    external_id?: string;
}

interface Payment {
    invoice_uid: string;
    currency: string;
    txid: string;
    txhex: string;
    createdAt: Date;
}

const loadModal = ({ uid }: { uid: any }) => {

  /*let sdk = new window.AnypaySDK({
    element: 'anypay-widget',
    config: {
      invoiceId: uid,
      onAnypayLoadSuccess: () => { console.log('anypay load success' )},
      onAnypayLoadFailure: () => { console.error('anypay load failure' )},
      onAnypayPaymentSuccess: console.log,
      onAnypayPaymentFailure: console.error,
    }
  })

  window.anypay = sdk;
  */

  window.open(`https://anypay.sv/invoices/${uid}`, '_blank')
}

function InvoiceDetails({ invoice, payment }: {invoice: Invoice, payment: Payment}) {
    console.log('invoice', invoice)
    return (
      <>
        <Script
        id="anypay-js"
        src="https://anypay.sv/static/js/main.js"
        onLoad={() => {
          console.log('anypay-js loaded')
        }}
      />
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
          {invoice.external_id && (
            <>
              <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  External ID: {invoice.external_id}
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
                  <p>NOT PAID</p>
              </Box>
              <Box>
                <Button onClick={() => { loadModal({ uid: invoice.uid }) }} variant="outlined" color="warning">
                  Pay Now
                </Button>
              </Box>
              </>
          )}

        </Box>
      </>
    )
}

function InvoiceEvents({ invoice }: { invoice: Invoice }) {

    const { data, error } = useSWR(`https://api.anypayx.com/v1/api/invoices/${invoice.uid}/events`, axios)

    if (error) {
        return (
            <Card>

                <p>Error: {error.message}</p>
            </Card>
        )
    }

    if (!data) {
        return (
          <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}>
            <p>loading...</p>
          </Box>
        )
    }

    let events: any[] =  data?.data?.events;

    const hasEvents = events.length > 0

    events = events.map((event) => (
      Object.assign(event, {
        createdAt: Moment(new Date(event.createdAt)).format('MMM Do, YYYY hh:MMa')
      })
    ))

    return (
        <>
        {hasEvents && (

            <Box sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}>

              <Box sx={{p: 1}}> <h2>Event Log</h2></Box>


            <Scrollbar>
                <TableContainer sx={{ minWidth: 400 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>Payload</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {events.map((event) => (
                              <TableRow key={event.id}>
                                  <TableCell>{event.createdAt}</TableCell>
                                  <TableCell>{event.type}</TableCell>
                                  <TableCell>{JSON.stringify(event.payload)}</TableCell>
                              </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>
        </Box>
        )}
        </>


    )


}

function KrakenDeposits({ deposits }: { deposits: any[] }) {

  if (!deposits || deposits.length === 0) {
    return <></>
  }

  const hasDeposits = deposits.length > 0

  deposits = deposits.map((deposit) => (
    Object.assign(deposit, {
      date: Moment(new Date(deposit.createdAt)).format('MMM Do, YYYY hh:MMa')
    })
  ))

  //TODO: Link to Kraken Status Explanation -> https://support.kraken.com/hc/en-us/articles/360000382543-What-does-the-status-of-my-deposit-or-withdrawal-mean-
  return (
      <>
                <br/>
      {hasDeposits && (

          <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}>            
            <Box sx={{p: 1}}> <h2>Kraken Deposit</h2></Box>
           

          <Scrollbar>
              <TableContainer sx={{ minWidth: 400 }}>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Time</TableCell>
                              <TableCell>Asset</TableCell>
                              <TableCell>Amount</TableCell>
                              <TableCell>Fee</TableCell>
                              <TableCell>ID</TableCell>

                              <TableCell>Status</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                      {deposits.map((deposit) => (
                            <TableRow key={deposit.refid}>
                                <TableCell>{deposit.date}</TableCell>
                                <TableCell>{deposit.asset}</TableCell>
                                <TableCell>{deposit.amount}</TableCell>
                                <TableCell>{deposit.fee}</TableCell>
                                <TableCell>{deposit.refid}</TableCell>
                                {deposit.status === 'Settled' && (
                                  <TableCell>
                                    <Box
                                      sx={{
                                      color: 'warning.dark',
                                      display: 'inline',
                                      fontWeight: 'bold',
                                      mx: 0.5,
                                      fontSize: 14,
                                      }}
                                    >
                                        {deposit.status}
                                    </Box>
                                  </TableCell>
                                )}
                                {deposit.status === 'Success' && (
                                  <TableCell>
                                    <Box
                                      sx={{
                                      color: 'success.dark',
                                      display: 'inline',
                                      fontWeight: 'bold',
                                      mx: 0.5,
                                      fontSize: 14,
                                      }}
                                    >
                                      {deposit.status}
                                    </Box>
                                  </TableCell>
                                )}
                                {deposit.status === 'Failure' && (
                                  <TableCell>
                                    <Box
                                      sx={{
                                      color: 'error.dark',
                                      display: 'inline',
                                      fontWeight: 'bold',
                                      mx: 0.5,
                                      fontSize: 14,
                                      }}
                                    >
                                      {deposit.status}
                                    </Box>
                                  </TableCell>
                                )}
                            </TableRow>
                        ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Scrollbar>
      </Box>
      )}
      </>


  )


}
