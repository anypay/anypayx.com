
import NextLink from 'next/link';
// @mui
import {
  Button,
  Container
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// @types
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';

import AppUnderConstruction from 'src/sections/@dashboard/general/app/AppUnderConstruction';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import Iconify from '../../../components/Iconify';

WebhooksList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WebhooksList() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Payments: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Quick Check Out"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Merchant' },
            { name: 'Check Out Now' }
          ]}
          action={
            // @ts-ignore
            <NextLink href={PATH_DASHBOARD.user.newUser} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New API Key
              </Button>
            </NextLink>
          }
        />
        <AppUnderConstruction />

      </Container>
    </Page>
  );
}
