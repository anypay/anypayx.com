
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
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import AccountLogs from '../../../components/logs/AccountLogs'
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

LogsList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function LogsList() {
  
  const { enqueueSnackbar } = useSnackbar();

  const { events } = useWebsocket();
  
  events.on('authenticated', (payload) => {

    enqueueSnackbar('Websocket Authenticated');
    
  })

  const { themeStretch } = useSettings();

  return (
    <Page title="Payments: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Account Log Entries"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Developer' },
            { name: 'Account Logs' }
          ]}
        />
        <AccountLogs/>


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