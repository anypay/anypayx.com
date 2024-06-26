// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { FaqsHero, FaqsList1, FaqsList2 } from '../sections/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

Faqs.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <Page title="FAQs">
      <RootStyle>
        <FaqsHero />

        <Container sx={{ mt: 15, mb: 10 }}>
          {/*<FaqsCategory />*/}

          <Typography variant="h3" sx={{ mb: 5 }}>
            Frequently Asked Questions
          </Typography>

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <FaqsList1 />
            </Grid>
            <Grid item xs={12} md={6}>
              <FaqsList2 />
            </Grid>
            {/*<Grid item xs={12} md={6}>
              <FaqsForm />
  </Grid>*/}
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
