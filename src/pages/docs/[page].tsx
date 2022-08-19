// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';

//import MuiMarkdown from 'mui-markdown';

import { useState } from 'react'

import { useRouter } from 'next/router'

import Markdown from '../../components/Markdown'

import remarkGfm from 'remark-gfm'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

DocumentationMarkdownPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function DocumentationMarkdownPage() {

  const router = useRouter()

  console.log('pathname', router.pathname)
  console.log('router', router)

  let [markdown, setMarkdown] = useState('')

  const file = router.asPath.split('/')[2]

  fetch(`/docs/${file}.md`).then(async (response) => {

    const md = await response.text()

    setMarkdown(md)

  })

  const remarkPlugins = [
    remarkGfm
  ]

  return (
    <Page title="Documentation Page Name">
      <RootStyle>
        <Container>
          <Markdown remarkPlugins={remarkPlugins}>{markdown}</Markdown>
        </Container>
      </RootStyle>
    </Page>
  );
}
