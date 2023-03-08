import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, Link } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const ScreenStyle = styled(m.div)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  const screenshots = [
    'https://bico.media/dfb327cf917f31341c7b5d7ec7a9b7e28e280825544953d6b6307b0cbe27f3c4',
    'https://bico.media/922cdfec0072a587997db76502f681c270b0d2f1541799a77749dc1b6a61aa0b',
    'https://bico.media/19232eb073041b3d9d10e97e084fc28f315e13720a3d07ac87ab2832d38531b0'
  ]

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="div"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.disabled' }}
                >
                  e-Commerce
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                E-Commerce
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}
                >
                
                Get paid in Bitcoin today. Add Dogecoin, Litecoin, Bitcoin Cash, and BitcoinSV alongside other payment methods.



                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <NextLink href="https://wordpress.org/plugins/anypay-woocommerce/" passHref>
                  <Button size="large" color="inherit" variant="outlined">
                    Download the Plugin
                  </Button>
                </NextLink>
              </m.div>

              <m.div variants={varFade().inUp}>
              <br/>
                <Link href="https://anypay.dev">
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >
                  I’d like to build a custom API integration
                  </Typography>
                </Link>
              </m.div>

            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
              }}
            >
              {screenshots.map((src, index) => (
                <ScreenStyle
                  key={index}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate),
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute',
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none',
                    }),
                  }}
                >
                  <Image
                    disabledEffect
                    alt={`screen ${index + 1}`}
                    src={src}
                  />
                </ScreenStyle>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
