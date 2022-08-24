
import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  CardHeader,
  Stack,
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';

import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import { BASE, useAPI, useAPIFromRoot } from '../../../api/useAPI';

// ----------------------------------------------------------------------

WalletBotDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WalletBotDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { data, error, loading } = useAPI(`/apps/wallet-bot`)

  const { data: invoices, error: invoicesError, loading: invoiesLoading } = useAPI(`/apps/wallet-bot/invoices`)

  console.log({ invoices, invoicesError, invoiesLoading })

  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  const status = 'disconnected'

  return (
    <Page title="Wallet Bot: Dashboard">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Wallet Bot"
          links={[
            { name: 'Apps' },
            { name: 'Wallet Bot' }
          ]}

        />       
        <Card>
          <img src="https://bitcoinfileserver.com/ea8205469186c12f6b23866d3ef50ab84f6f6b82dab43075e0229ab32ca6f5bc"/>
        </Card>
        <br/>
        <Card>
          <CardHeader title="Git"/>

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography>github.com/anypay/wallet-bot</Typography>

          </Stack>
        </Card>
        <br/>
        <Card>
          <CardHeader title="Docker"/>

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography>hub.docker.com/anypay/wallet-bot</Typography>

          </Stack>
        </Card>
        <br/>
        <Card>
          <CardHeader title="Token" />

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="body2">{data?.access_token}</Typography>

          </Stack>
        </Card>
        <br/>
        <Card>
          <CardHeader title="Status" />

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="body2">
              {data?.wallet_bot.status === 'connected' ? (
                <span>🟢 {data?.wallet_bot.status}</span>
              ) : (
                <span>🔴 {data?.wallet_bot.status}</span>
              )}
            </Typography>

          </Stack>
        </Card>
        <br/>

        {data?.balances && (
          <Card>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Asset</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Value USD</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data?.balances.map((balance) => (
                      <TableRow key={`${balance.asset}-${balance.address}`}>
                          <TableCell>{balance.asset}</TableCell>
                          <TableCell>{balance.address}</TableCell>
                          <TableCell>{balance.value / 100_000_000}</TableCell>
                          <TableCell>${balance.value_usd}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
            </Table>
          </Card>
        )}

      </Container>
    </Page>
  );
}
