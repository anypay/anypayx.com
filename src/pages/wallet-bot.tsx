// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { FaqsHero, FaqsList1, FaqsList2 } from '../sections/faqs';

import MuiMarkdown from 'mui-markdown';

import { useState } from 'react'
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

  let [markdown, setMarkdown] = useState('')

  fetch('/docs/wallet-bot.md').then(async (response) => {

    const md = await response.text()

    setMarkdown(md)

  })

  return (
    <Page title="Wallet Bot">
      <RootStyle>
        <Container>
          <MuiMarkdown>{markdown}</MuiMarkdown>
          <br/>
        </Container>
      </RootStyle>
    </Page>
  );
}
