
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
  
  import { getJwt } from '../../../utils/jwt'
  
  import { API_BASE, useAPI } from '../../../api/useAPI';

  import { useRouter } from 'next/router';

  
  
  ShowInvoice.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
  };
  
  // ----------------------------------------------------------------------
  
  export default function ShowInvoice() {
    
    const { themeStretch } = useSettings();
  
    const { user } = useAuth();
  
    console.log({ user });
  
    const { uid: token } = getJwt()

    const router = useRouter();

    const { account_id } = router.query
  
    const checkoutURL = `https://${API_BASE}/reports/csv/payments.csv?token=${token}`

    let { data, error, refresh, loading } = useAPI(`/linked-accounts/${account_id}/payments`);

    return (
      <Page title="Payments: List">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading={`Linked Account ${account_id}`}
            links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              { name: 'Linked Accounts', href: PATH_DASHBOARD.account.links },
              { name: `${account_id}` }
            ]}
            action={
  
              <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
                  <Button variant="contained" startIcon={<Iconify icon={'eva:share-fill'} />}>
                  Export CSV Report
                </Button>
              </a>
  
            }
          />
          {data?.payments && (
            <PaymentsList payments={data.payments}/>
          )}
          
  
        </Container>
      </Page>
    );
  }
  
