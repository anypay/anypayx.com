import React, { useState } from 'react'

import { useTheme } from '@mui/material/styles';

import moment from 'moment'

import { sentenceCase } from 'change-case';

import {
    Avatar,
    Card,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    TablePagination
  } from '@mui/material';

import { useSnackbar } from 'notistack';

import { format } from 'date-fns'
import {
    UserListHead,
    UserListToolbar,
    UserMoreMenu,
  } from '../../sections/@dashboard/user/list';

import PaymentsMoreMenu from '../../sections/@dashboard/payments/list/PaymentsMoreMenu'

import Scrollbar from '../../components/Scrollbar';
import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';

import { UserManager } from '../../@types/user';

import { useListPayments } from '../../api/payments';

const TABLE_HEAD = [
    { id: 'coin', label: 'Coin', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    { id: '' }
  ];
  // @mui
import { Box, TableHead, TableSortLabel } from '@mui/material';

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


export default function PaymentsList() {

    const theme = useTheme();

    const [selected, setSelected] = useState<string[]>([]);
    const [filterName, setFilterName] = useState('');

    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState('date');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { enqueueSnackbar } = useSnackbar();

    const { payments, error, loading, refresh } = useListPayments();

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - payments.length) : 0;

    
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (name: string) => {
      alert(name)
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    

    if (!payments && loading) {
        return <div>Loading...</div>
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
                      const { currency, amount, txid, outputs, createdAt, invoice } = row;

                      const date = moment(createdAt).format('MMM DD, YYYY - hh:mma')

                      return (
                        <TableRow
                          hover
                          key={txid}
                        >

                          <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={currency} src={`/icons/coins/${currency}.png`} sx={{ mr: 2 }} />
                            <Typography variant="subtitle2" noWrap>
                                {currency}
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                              {invoice.amount} {invoice.currency}
                          </TableCell>
                          <TableCell align="left">{date}</TableCell>
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
            count={payments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
    )
    
}

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
  