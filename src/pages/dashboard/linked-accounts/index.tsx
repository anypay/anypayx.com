
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
  import LinkedAccountsList from '../../../components/linked-accounts/LinkedAccountsList'
  
  import LinkAccountDialog from '../../../components/linked-accounts/LinkAccountDialog'


  
  import { getJwt } from '../../../utils/jwt'
  
  import { API_BASE } from '../../../api/useAPI';
  
  
  ShowInvoice.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
  };
  
  // ----------------------------------------------------------------------
  
  export default function ShowInvoice() {
    
    const { themeStretch } = useSettings();
  
    const { user } = useAuth();
  
    console.log({ user });
  
    const { uid: token } = getJwt()
  
    const checkoutURL = `https://${API_BASE}/reports/csv/payments.csv?token=${token}`

    const links = [{
        source: 1177
    }]
  
    return (
      <Page title="Accounts: Linked">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Linked Accounts"
            links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              { name: 'Linked Accounts', href: PATH_DASHBOARD.account.links }
            ]}
            action={
  
              <a target="_blank" rel="noopener noreferrer">
                <LinkAccountDialog refresh={console.log}/>

              </a>
  
            }
            /*
            action={
  
              <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
                  <Button variant="contained" startIcon={<Iconify icon={'eva:share-fill'} />}>
                  Share Read-Only Access
                </Button>
              </a>
  
            }*/
          />

          <LinkedAccountsList/>
  
        </Container>
      </Page>
    );
  }
  
