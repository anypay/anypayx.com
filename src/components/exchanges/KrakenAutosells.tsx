import {
    Box, Card, CardHeader, Table,
    TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography
  } from '@mui/material';
  import moment from 'moment';
  import { useSnackbar } from 'notistack';
  import React, { useState } from 'react';
  import Scrollbar from '../Scrollbar';
  import LoadingScreen from '../LoadingScreen';

  import useSWR from 'swr';
  import axios from '../../utils/axios';

  import { BASE } from '../../api/useAPI'
  
  const TABLE_HEAD = [
      { id: 'date', label: 'Date', alignRight: false },
      { id: 'type', label: 'Description', alignRight: false },
      { id: 'payload', label: 'Order ID', alignRight: false }
    ];
  
  // ----------------------------------------------------------------------
  
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
    return (
      <TableHead>
        <TableRow>
  
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
  
  export default function KrakenAutosells() {
    
      const [order] = useState<'asc' | 'desc'>('asc');
      const [orderBy] = useState('date');
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(8);
  
      const { enqueueSnackbar } = useSnackbar();

      const { data, error } = useSWR(`${BASE}/kraken/autosell`, axios)

      if (!data && !error) {
        return <LoadingScreen/>
      }

      const entries = data?.data.orders

      console.log('autosell.response', entries)
  
      const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - entries.length) : 0;
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  

  
      if (error) {
  
          enqueueSnackbar('Error Loading Logs', { variant: 'warning' })
  
      }
  
      if (entries && entries.length === 0) {
          return (
              <div>
                  <h1>No Kraken Auto Sell Orders Yet</h1>
              </div>
          )
      }
  
      if (!entries) {
          return <div>Failed to Load Kraken Auto Sell History</div>
      }
  
      return (
  
          <Card>
  
            <CardHeader title="Auto Sell Order History"/>
  
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <PaymentsListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={entries.length}
                  />
                  <TableBody>
                    {entries
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((entry: any, index: number) => {
  
                        const date = moment(entry.createdAt).format('MMM DD, YYYY - hh:mma')
    
                        return (
                          <TableRow
                            hover
                            key={entry.id}
                          >
                            <TableCell align="left">{date}</TableCell>
  
                            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography variant="subtitle2" noWrap>
                                  {entry.descr.order}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ maxWidth: 400 }} align="left">
                                {entry.txid[0]}
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
              count={entries.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, page) => setPage(page)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
      )
      
  }


  