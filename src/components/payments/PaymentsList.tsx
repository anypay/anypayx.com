import React, { useState } from 'react'

import moment from 'moment'

import Link from 'next/link'

import {
    Avatar,
    Card,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    Box, TableHead, TableSortLabel
  } from '@mui/material';

import { useSnackbar } from 'notistack';

import PaymentsMoreMenu from '../../sections/@dashboard/payments/list/PaymentsMoreMenu'

import Scrollbar from '../Scrollbar';

import { useListPayments } from '../../api/payments';
import { sendWebhook } from '../../api/webhooks';
import useWebsocket from '../../hooks/useWebsocket';

import LoadingScreen from '../LoadingScreen';

import { useRouter } from 'next/router';

const TABLE_HEAD = [
    { id: 'coin', label: 'Coin', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'uid', label: 'Uid', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    { id: '' }
  ];

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
} as const;

type Props = {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headLabel: any[];
};

function handleRowClicked() {
  console.log('handle row clicked')
}

function PaymentsListHead({
  order,
  orderBy,
  rowCount,
  headLabel
}: Props) {
  return (
    <TableHead>
      <TableRow onClick={handleRowClicked}>

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => { console.log('sort requested')}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

/*function sendWebhook(invoice_uid: string) {

  console.log(`manual webhook for ${invoice_uid} disabled`, { variant: 'warning'})

}*/

export default function PaymentsList({ payments }: { payments?: any[] }) {

  const { events } = useWebsocket()

  const router = useRouter();


    const [order] = useState<'asc' | 'desc'>('asc');
    const [orderBy] = useState('date');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { enqueueSnackbar } = useSnackbar();

    const { payments: _payments, error, loading, refresh } = useListPayments();

    if (!payments && _payments) { payments = _payments }

    events.on('payment', (payload) => {

      console.log('ON PAYMENT', payload)

      enqueueSnackbar(`${payload.currency} Payment Received`);
  
      refresh();
        
    })
    /*
    events.on('payment.completed', (payload) => {

      console.log('ON PAYMENT COMPLETED', payload)

      enqueueSnackbar(`New Payment ${payload.invoice.amount} ${payload.invoice.currency}`);
  
      refresh();
        
    })
    */


    if (!payments && loading) {
        return <LoadingScreen />
    }

    if (error) {

        enqueueSnackbar('Error Loading Payments', { variant: 'warning' })

    }

    if (payments && payments.length === 0) {
        return (
            <div>
                <h1>No Payments Yet</h1>
            </div>
        )
    }

    if (!payments) {
        return <div>Failed to Load Payments</div>
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - payments.length) : 0;


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    

    function rowClicked(row: any) {
      console.log("payments.list.row.clicked", row)

      router.push(`/dashboard/invoices/${row.invoice.uid}`)
    }

    console.log('PAYMENTS', payments)

    return (

        <Card>


          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <PaymentsListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={payments.length}
                />
                <TableBody>
                  {payments
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any) => {
                      const { currency, txid, createdAt, invoice } = row;

                      const date = moment(createdAt).format('MMM DD, YYYY - hh:mma')

                      return (
                        <TableRow
                          hover
                          key={txid}
                        >

                          <TableCell 
                            onClick={() => rowClicked(row)}
                            size="small"
                            sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={currency} src={`/icons/coins/${currency}.png`} sx={{ mr: 2 }} />
                            <Typography variant="subtitle2" noWrap>
                                {currency}
                            </Typography>
                          </TableCell>
                          <TableCell onClick={() => rowClicked(row)} align="left">
                              {invoice.amount} {invoice.currency}
                          </TableCell>
                          <TableCell onClick={() => rowClicked(row)} align="left">
                              <span style={{color: 'white', textDecoration: 'none' }}>{invoice.uid}</span>
                          </TableCell>
                          <TableCell onClick={() => rowClicked(row)} align="left">{date}</TableCell>
                          <TableCell align="right">
                            <PaymentsMoreMenu invoice={invoice} onSendWebhook={() => {
                                sendWebhook(invoice.uid)
                            }} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={payments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
    )
    
}
