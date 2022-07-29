import React, { useState } from 'react'

import moment from 'moment'

import Link from 'next/link'

import { useAPI, axios } from '../../api/useAPI'

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
    Box, TableHead, TableSortLabel,
    Button
  } from '@mui/material';

import { useSnackbar } from 'notistack';

import PaymentsMoreMenu from '../../sections/@dashboard/payments/list/PaymentsMoreMenu'

import Scrollbar from '../Scrollbar';

import { useLinkedAccounts } from '../../api/linked-accounts';
import { sendWebhook } from '../../api/webhooks';
import useWebsocket from '../../hooks/useWebsocket';

import LoadingScreen from '../LoadingScreen';

import { useRouter } from 'next/router';

const TABLE_HEAD = [
    { id: 'source', label: 'Source Account', alignRight: false },
    //{ id: 'target', label: 'Target Account ID', alignRight: false },
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

function PaymentsListHead({
  order,
  orderBy,
  rowCount,
  headLabel
}: Props) {

  let { data, error, loading, refresh } = useAPI('/linked-accounts');

  console.log({ data, error, loading })

  return (
    <TableHead>
      <TableRow>

        {headLabel.map((headCell) => (
          <>
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
          <TableCell></TableCell>
          <TableCell></TableCell>
          </>

        ))}
      </TableRow>
    </TableHead>
  );
}

/*function sendWebhook(invoice_uid: string) {

  console.log(`manual webhook for ${invoice_uid} disabled`, { variant: 'warning'})

}*/

export default function LinkedAccountsList() {

  const { events } = useWebsocket()

  const router = useRouter();

    const [order] = useState<'asc' | 'desc'>('asc');
    const [orderBy] = useState('date');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { enqueueSnackbar } = useSnackbar();

    let { data, error, refresh, loading } = useAPI('/linked-accounts');

    if (loading) {
      return <p>Loading</p>
    }

    if (error) {

      return <p>Error: {error}</p>
    }

    const target_accounts = data?.linked_accounts?.target

    const source_accounts = data?.linked_accounts?.source

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - target_accounts.length) : 0;


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (!target_accounts && loading) {
        return <LoadingScreen />
    }

    if (error) {

        enqueueSnackbar('Error Loading Linked Accounts', { variant: 'warning' })

    }

    if (target_accounts && target_accounts.length === 0) {
        return (
            <div>
                <h1>No Linked Accounts Yet</h1>
            </div>
        )
    }

    if (!target_accounts) {
        return <div>Failed to Load Linked Accounts</div>
    }

    function rowClicked(row: any) {
      router.push(`/dashboard/linked-accounts/${row.source_account.id}`)
    }

    async function unlink(id: number) {
      console.log('unlink', { id })

      let result = await axios.delete(`/linked-accounts/${id}`)

      enqueueSnackbar(`Account Unlinked`, { variant: 'success' })

      console.log(result)

      refresh();
    }

    return (

      <>
        <Card>
        <Typography sx={{padding: '1em'}}><h2 >Accounts Shared With Me</h2></Typography>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              
              <Table>

                <TableBody>
                  {target_accounts
                    .map((row: any) => {
                      const { source_account, target_account, id } = row;

                      return (
                        <TableRow
                          hover
                          key={id}
                        >

                          <TableCell
                            onClick={() => rowClicked(row)}
                            size="small"
                            sx={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
                            <Typography variant="subtitle2" noWrap>
                                {source_account.email}
                            </Typography>

                          </TableCell>
                          <TableCell>
                            <Button onClick={() => rowClicked(row)}>View Payments</Button>
                          </TableCell>
                          <TableCell>
                            <Button onClick={() => unlink(row.id)}>Unlink</Button>
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

          {target_accounts.length > 10 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={target_accounts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, page) => setPage(page)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
          </Card>

        <br/>
        <Card>
        <Typography sx={{padding: '1em'}}><h2 >Accounts That Can Read My Account</h2></Typography>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>

                <TableBody>
                  {source_accounts
                    .map((row: any) => {
                      const { source_account, target_account, id } = row;

                      return (
                        <TableRow
                          hover
                          key={id}
                        >

                          <TableCell
                            onClick={() => rowClicked(row)}
                            size="small"
                            sx={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
                            <Typography variant="subtitle2" noWrap>
                                {target_account.email}
                            </Typography>

                          </TableCell>
                          <TableCell>
                          </TableCell>
                          <TableCell>
                          <Button onClick={() => unlink(row.id)}>Unlink</Button>
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

          {source_accounts.length > 10 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={source_accounts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, page) => setPage(page)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Card>
        </>
    )
    
}
