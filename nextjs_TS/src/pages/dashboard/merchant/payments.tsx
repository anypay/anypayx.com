
import {
  Button,
  Container
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// api data
import useAuth from '../../../hooks/useAuth';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import PaymentsList from '../../../components/payments/PaymentsList'


ShowInvoice.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ShowInvoice() {
  
  const { themeStretch } = useSettings();

  const { user } = useAuth();

  const checkoutURL = `https://anypayx.com/app/#/pay/${user?.id}`

  return (
    <Page title="Payments: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="My Payments Received"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Merchant' },
            { name: 'Payments Received' }
          ]}
          action={

            <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
                <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                Quick Checkout
              </Button>
            </a>

          }
        />
        <PaymentsList/>

      </Container>
    </Page>
  );
}
