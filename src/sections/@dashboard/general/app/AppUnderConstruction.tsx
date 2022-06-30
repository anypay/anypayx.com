// @mui
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent, CardProps } from '@mui/material';
import { SeoIllustration } from '../../../../assets';
import { PATH_DASHBOARD } from '../../../../routes/paths';
import useAuth from '../../../../hooks/useAuth';


// @next
import NextLink from 'next/link';


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.error.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

// ----------------------------------------------------------------------

interface AppUnderConstructionProps extends CardProps {
  message?: string;
}

export default function AppUnderConstruction({ message }: AppUnderConstructionProps) {

  let { user } = useAuth();

  const checkoutURL = `https://anypayx.com/app/#/pay/${user?.id}`

  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800',
        }}
      >
        <Typography gutterBottom variant="h4">
          Feature Under Construction
        </Typography>

        <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
          If you would like to make this happen more quickly send us some coins.
        </Typography>

        <a target="_blank" href={checkoutURL} rel="noopener noreferrer">
          <Button variant="contained">Go To Checkout</Button>
        </a>
      </CardContent>

      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' },
        }}
      />
    </RootStyle>
  );
}
