
import { useSnackbar } from 'notistack';
import Image from 'next/image';

// @mui
import {
  Card,
  CardHeader,
  Stack,
  Container,
  Typography
} from '@mui/material';
// routes
// hooks
import useSettings from '../../hooks/useSettings';

import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';

import { useAPI } from '../../api/useAPI';

import Link from 'next/link'

// ----------------------------------------------------------------------

WalletBotDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WalletBotDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { data, error, loading } = useAPI(`/v1/api/apps/wallet-bot`)

  if (error) {
    enqueueSnackbar('Error Loading Wallet Bot', { variant: 'warning' })
  }

  const status = 'disconnected'

  return (
    <Page title="Apps">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Apps"
          links={[
            { name: 'Apps' }
          ]}

        />       
        <Card>
            <Link href='/apps/wallet-bot' passHref>
              <Image src="https://bico.media/ea8205469186c12f6b23866d3ef50ab84f6f6b82dab43075e0229ab32ca6f5bc" alt="Wallet Bot" width={100} height={100}/>
            </Link>
        </Card>

      </Container>
    </Page>
  );
}

