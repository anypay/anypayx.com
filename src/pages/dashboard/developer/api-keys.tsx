
import { useSnackbar } from 'notistack';

// @mui
import {
  Card,
  CardHeader,
  Stack,
  Container,
  Typography
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

import useSWR from 'swr';
import axios from '../../../utils/axios';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import { API_BASE } from '../../../api/useAPI';

// ----------------------------------------------------------------------

WebhooksList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WebhooksList() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const { data, error } = useSWR(`${API_BASE}/v1/api/account/access-keys`, axios)

  if (error) {
    enqueueSnackbar('Error Loading API Keys', { variant: 'warning' })
  }

  return (
    <Page title="Webhooks: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="API Access Keys"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Developer' },
            { name: 'API Keys' }
          ]}

        />
        <Card>
          <CardHeader title="API Key" />

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="body2">{data?.data?.v0}</Typography>

          </Stack>
        </Card>

      </Container>
    </Page>
  );
}
