// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import { useRouter } from 'next/router'
// sections
import {
  HomeHero,
  HomeHeroAnypay,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
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
    <Page title="Enterprise Bitcoin Payments">
      <RootStyle>
        <ContentStyle>

          <HomeEnterprisePaymentsPlatform />

          <HomeWooCommercePlugin />

          <HomeLookingFor />


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
