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
                Running a retail store?
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                Crypto for Retail
              </Typography>
            </m.div>


            <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}
                >
Accept crypto at your store today. There’s no hardware to buy, and we track all your payments for easy accounting. Start to finish in under 30 minutes.


                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Button
                  color="inherit"
                  size="large"
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  href="https://appurl.io/HSMu6nlLQ"
                  endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
                >
                  Download the App Here
                </Button>
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
                  I’d like to learn more about AEPP
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
