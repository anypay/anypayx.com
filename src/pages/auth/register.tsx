import { capitalCase } from 'change-case';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Tooltip } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// routes
import { PATH_AUTH } from '../../routes/paths';
// guards
import GuestGuard from '../../guards/GuestGuard';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { RegisterForm } from '../../sections/auth/register';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return (
    <GuestGuard>
      <Page title="Register">
        <RootStyle>
          <HeaderStyle>
            <Logo />
            {smUp && (
              <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                Already have an account? {''}
                {/* @ts-ignore */}
                <NextLink href={PATH_AUTH.login} passHref>
                  {/* @ts-ignore */}
                  <Link variant="subtitle2">Login</Link>
                </NextLink>
              </Typography>
            )}
          </HeaderStyle>

          {mdUp && (
            <SectionStyle>
              <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                Take crypto payments easily with Anypay
              </Typography>
              {/* @ts-ignore */}
              <Image
                disabledEffect
                // @ts-ignore
                alt="register"
                // @ts-ignore
                src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png"
              />
            </SectionStyle>
          )}

          <Container>
            <ContentStyle>
              <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    Start Earning Bitcoins
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Collect cryptocurrency payments in seconds!
                  </Typography>
                </Box>
                <Tooltip title={capitalCase(method)}>
                  <>
                    <Image
                      disabledEffect
                      // @ts-ignore
                      alt={method}
                      // @ts-ignore
                      src={`https://bico.media/bfcae220cb1cc0ce4322b463092d9216cd6caad42eb078f6e113857751a61753`}
                      sx={{ width: 32, height: 32 }}
                    />
                  </>
                </Tooltip>
              </Box>

              <RegisterForm />

              <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                By registering, I agree to Anypay&nbsp;
                <Link underline="always" color="text.primary" target="_blank" href="/docs/terms">
                  Terms of Service
                </Link>
                {''} and {''}
                <Link underline="always" color="text.primary" target="_blank" href="/docs/privacy">
                  Privacy Policy
                </Link>
                .
              </Typography>

              {!smUp && (
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                  Already have an account?{' '}
                  {/* @ts-ignore */}
                  <NextLink href={PATH_AUTH.login} passHref>
                    {/* @ts-ignore */}
                    <Link variant="subtitle2">Login</Link>
                  </NextLink>
                </Typography>
              )}
            </ContentStyle>
          </Container>
        </RootStyle>
      </Page>
    </GuestGuard>
  );
}
