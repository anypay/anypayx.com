import {
  Box, Card, Table,
  TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography
} from '@mui/material';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useAccountLogs } from '../../api/logs';
import useWebsocket from '../../hooks/useWebsocket';
import PaymentsMoreMenu from '../../sections/@dashboard/payments/list/PaymentsMoreMenu';
import Scrollbar from '../Scrollbar';

import LoadingScreen from '../LoadingScreen';

const TABLE_HEAD = [
    { id: 'date', label: 'Date', alignRight: false },
    { id: 'type', label: 'Event Type', alignRight: false },
    { id: 'payload', label: 'Event Payload', alignRight: false },    
    { id: '' }
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


export default function AccountLog2() {

  const { events } = useWebsocket();

    const [order] = useState<'asc' | 'desc'>('asc');
    const [orderBy] = useState('date');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const { enqueueSnackbar } = useSnackbar();

    const { entries, error, loading, refresh } = useAccountLogs();

    console.log({ entries });

    events.on('log_entry', (payload) => {

      console.log('ON LOG ENTRY', payload)
  
      refresh();
        
    })

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - entries.length) : 0;

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    

    if (!entries && loading) {
        return <LoadingScreen />
    }

    if (error) {

        enqueueSnackbar('Error Loading Logs', { variant: 'warning' })

    }

    if (entries && entries.length === 0) {
        return (
            <div>
                <h1>No Log Entires Yet</h1>
            </div>
        )
    }

    if (!entries) {
        return <div>Failed to Load Entries</div>
    }

    return (

        <Card>


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

                      const payload = JSON.stringify(entry.payload);

                      return (
                        <TableRow
                          hover
                          key={entry.id}
                        >
                          <TableCell align="left">{date}</TableCell>

                          <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="subtitle2" noWrap>
                                {entry.type}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: 400 }} align="left">
                              {payload}
                          </TableCell>
                          <TableCell align="right">
                            <PaymentsMoreMenu onSendWebhook={() => {
                                enqueueSnackbar("manual webhook disabled", { variant: 'warning'})
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
            count={entries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
    )
    
}
