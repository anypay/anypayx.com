import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Joël Valenzuela',
    rating: 5,
    dateCreate: 'January 10, 2021',
    content: `The best crypto POS app on the market`,
  },

  {
    name: 'jimbabb',
    rating: 5,
    dateCreate: 'May 24, 2019',
    content: `Crypto for merchants made easy...Accepting bitcoin at a business can be challenging, particularly with employee training and work flow integration. I love how this app is so clean and simple. It’s a breeze for both the cashiers and the customers to confirm transactions. The absence of a complicated account structure is huge benefit.`,
  },

  {
    name: 'Tamsin Thorn',
    rating: 5,
    dateCreate: 'August 28, 2020',
    content: `Really easy to use! Works flawlessly.`,
  },
  
  {
    name: 'Maymay8',
    rating: 5,
    dateCreate: 'August 28, 2020',
    content: `I need easy. This is it. I’ve wanted to engage with crypto to draw in more customers and connections, but I needed the process to be easy. This did the trick. Thanks!`,
  },
    
  {
    name: 'A Google User',
    rating: 5,
    dateCreate: 'July 11, 2019',
    content: `Very easy to use. Superb for getting retailers online quickly.`,
  },

  {
    name: 'Nicole_Tremblay_90',
    rating: 5,
    dateCreate: 'September 21, 2019',
    content: `all I need. Many of my customers use cryptocurrencies so this is the best app for them to make payment. Quick and easy`,
  },

  {
    name: 'A Google User',
    rating: 5,
    dateCreate: 'May 24, 2019',
    content: `Great app, ease of use is so important. Thanks Anypay!`,
  },

  {
    name: 'A Google User',
    rating: 5,
    dateCreate: 'August 28, 2020',
    content: `I was able to accept crypto within seconds`,
  },
  {
    name: 'A Google User',
    rating: 5,
    dateCreate: 'May 24, 2019',
    content: `wow, this is such a great app for the cryptocurrency community. very helpful for anyone accepting Bitcoin or any cryptocurrency as payments. I am recommending this to all my friends and businesses that are interested in cryptocurrency.`,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 0.8)} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), url(https://minimal-assets-api.vercel.app/assets/images/about/testimonials.jpg)`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  Testimonials
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  We love <br />
                  Anypay
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white' }}>
                  Our goal is to create a product and service that you’re satisfied with and use
                  every day. This is why we’re constantly making improvements to our platform to 
                  make it better and really listen to what our users have to say.
                </Typography>
              </m.div>

              {!isDesktop && (
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <m.div variants={varFade().inUp}>
                    <TestimonialLink />
                  </m.div>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' },
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {isDesktop && (
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <m.div variants={varFade().inLeft}>
              <TestimonialLink />
            </m.div>
          </Box>
        )}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon={'ic:round-arrow-right-alt'} sx={{ ml: 1, width: 20, height: 20 }} />
    </Link>
  );
}

type TestimonialCardProps = {
  testimonial: {
    name: string;
    rating: number;
    content: string;
    dateCreate: Date | string;
  };
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const theme = useTheme();
  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        ...cssStyles().bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" sx={{ color: 'grey.500' }}>
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
