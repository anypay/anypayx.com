import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Markdown from '../../components/Markdown';

// ----------------------------------------------------------------------

DocsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function DocsPage() {
  const { query } = useRouter();
  const [content, setContent] = useState('');
  const [remarkGfm, setRemarkGfm] = useState(null);

  useEffect(() => {
    // Dynamically import remark-gfm
    import('remark-gfm').then((module) => {
      //@ts-ignore
      setRemarkGfm(module.default);
    });
  }, []);

  useEffect(() => {
    if (query.page) {
      fetch(`/docs/${query.page}.md`)
        .then((response) => response.text())
        .then((text) => setContent(text));
    }
  }, [query.page]);

  return (
    <Page title="Documentation">
      <Container>
        <HeaderBreadcrumbs
          heading="Documentation"
          links={[
            { name: 'Home', href: '/' },
            { name: 'Docs', href: '/docs' },
            { name: query.page as string || '' },
          ]}
        />

        {content && remarkGfm && (
          <Markdown
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </Markdown>
        )}
      </Container>
    </Page>
  );
}
