// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeLookingFor,
  HomeAdvertisement,
  HomeWooCommercePlugin,
  HomeEnterprisePaymentsPlatform,
} from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};


// ----------------------------------------------------------------------

export default function HomePage() {
  //const router = useRouter();

  //router.push('/dashboard')

  return (
    <Page title="Bitcoin Payments">
      <RootStyle>
        <ContentStyle>

          <HomeWooCommercePlugin />

          <HomeLookingFor />

          <HomeEnterprisePaymentsPlatform />

          <HomeAdvertisement />


          {/*

          <HomeMinimal />

          <HomeHugePackElements />

          <HomeDarkMode />

          <HomeColorPresets />

          <HomeCleanInterfaces />

          <HomePricingPlans />*
          
        */}

          

        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
