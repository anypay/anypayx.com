import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Link,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
} from '@mui/material';
// _mock_
import { _homePlans } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeEnterprisePaymentsPlatform() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              Bitcoin for Business
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Anypay for Developers
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
              }}
            >

Add complex crypto payments to your applications in seconds with our simple developer platform. We abstract away all the bitcoin stuff so your team can get building quickly.

Well-documented code with lots of examples makes Anypay easy!<br/><br/>
            
Your business can finally let your developers build solutions that your clients need and we’ll make sure that 100% of all payments are built, verified, broadcasted and executed correctly.<br/><br/>

We offer the best pricing model in the industry at 0.1% per transaction and lower!
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
          <br/>
                <Link href="https://anypay.dev">
                  <Typography
                    sx={{
                      mb: 10,
                      color: 'black',
                      fontWeight: 'bold'
                    }}
                  >
                  I’d like to learn more about the Anypay API
                  </Typography>
                </Link>
            </m.div>
        </Box>


      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type PlanCardProps = {
  plan: {
    license: string;
    commons: string[];
    options: string[];
    icons: string[];
  };
};

function PlanCard({ plan }: PlanCardProps) {
  const { license, commons, options, icons } = plan;

  const standard = license === 'Standard';
  const plus = license === 'Standard Plus';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        ...(plus && {
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="overline" component="div" sx={{ mb: 2, color: 'text.disabled' }}>
            LICENSE
          </Typography>
          <Typography variant="h4">{license}</Typography>
        </div>

        {standard ? (
          <Image alt="package" src={icons[2]} sx={{ width: 40, height: 40 }} />
        ) : (
          <Stack direction="row" spacing={1}>
            {icons.map((icon) => (
              <Image key={icon} alt="package" src={icon} sx={{ width: 40, height: 40 }} />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon={'eva:checkmark-fill'}
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option, optionIndex) => {
            const disabledLine =
              (standard && optionIndex === 1) ||
              (standard && optionIndex === 2) ||
              (standard && optionIndex === 3) ||
              (plus && optionIndex === 3);

            return (
              <Stack
                spacing={1.5}
                direction="row"
                alignItems="center"
                sx={{
                  ...(disabledLine && { color: 'text.disabled' }),
                }}
                key={option}
              >
                <Iconify
                  icon={'eva:checkmark-fill'}
                  sx={{
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(disabledLine && { color: 'text.disabled' }),
                  }}
                />
                <Typography variant="body2">{option}</Typography>
              </Stack>
            );
          })}
        </Stack>

        <Stack direction="row" justifyContent="flex-end">
          <Link
            color="text.secondary"
            underline="always"
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/store/license/#i-standard-license"
            sx={{ typography: 'body2', display: 'flex', alignItems: 'center' }}
          >
            Learn more <Iconify icon={'eva:chevron-right-fill'} width={20} height={20} />
          </Link>
        </Stack>

        <Button
          size="large"
          fullWidth
          variant={plus ? 'contained' : 'outlined'}
          target="_blank"
          rel="noopener"
          href="https://material-ui.com/store/items/minimal-dashboard/"
        >
          Choose Plan
        </Button>
      </Stack>
    </Card>
  );
}
