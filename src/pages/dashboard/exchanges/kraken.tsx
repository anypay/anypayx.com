
import { useSnackbar } from 'notistack';
import {
  Container
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import KrakenAutosells from '../../../components/exchanges/KrakenAutosells'
import useWebsocket from '../../../hooks/useWebsocket';

Kraken.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Kraken() {
  
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
          heading="Kraken Exchange"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Exchanges' },
            { name: 'Kraken' }
          ]}
        />
        <KrakenAutosells/>


      </Container>
    </Page>
  );
}
