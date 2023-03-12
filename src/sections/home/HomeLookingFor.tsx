import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid, Link } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';
import ReactPlayer from 'react-player'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 8, md: 3 }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <m.div variants={varFade().inDown}>
              <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
                Point of Sale App
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                Retail Store
              </Typography>
            </m.div>


            <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}
                >
                No hardware. Easy accounting. Setup in minutes.


                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Button
                  color="inherit"
                  size="large"
                  variant="outlined"
                  target="_blank"
                  //margin-bottom="10px"
                  rel="noopener"
                  href="https://apps.apple.com/us/app/anypay/id1442219043"
                  endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
                >
                  Anypay®  iOS
                </Button>
              </m.div>
            
              <m.div variants={varFade().inDown}>
                <Button
                  color="inherit"
                  size="large"
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  href="https://play.google.com/store/apps/details?id=global.anypay.pos"
                  endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
                >
                  Anypay® 🤖 Android
                </Button>
              </m.div>

              <m.div variants={varFade().inUp}>
              <br/>
                <Link href="https://acadiapos.com/">
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >
                  Want POS integration? Click here for AcadiaPOS.
                  </Typography>
                </Link>
              </m.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                mb: { xs: 3, md: 0 },
                marginTop: "0em"
              }}
            >
              <ReactPlayer
                width='250px'
                height='30%'
                playing={true}
                loop={true}
                playsinline={true}
                muted={true}
                volume={0}
                url='https://anypayinc.s3.amazonaws.com/videos/ssstwitter_1649878088.mp4' />

            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
