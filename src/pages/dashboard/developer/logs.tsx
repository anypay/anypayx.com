
import { useSnackbar } from 'notistack';

import {
  Container,
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
import AccountLogs from '../../../components/logs/AccountLogs'
import useWebsocket from '../../../hooks/useWebsocket';


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

