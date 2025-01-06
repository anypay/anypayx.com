import NextLink from 'next/link';
import {
  Button,
  Container,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import AppUnderConstruction from 'src/sections/@dashboard/general/app/AppUnderConstruction';

// ----------------------------------------------------------------------

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
          heading="Send Invoices To Your Customers"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Merchant' },
            { name: 'Send Invoices' }
          ]}
          action={
            // @ts-ignore
            <NextLink href={PATH_DASHBOARD.user.newUser} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                Send New Invoice
              </Button>
            </NextLink>
          }
        />
        <AppUnderConstruction />

      </Container>
    </Page>
  );
}
