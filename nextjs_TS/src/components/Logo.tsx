import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();
  //const PRIMARY_LIGHT = theme.palette.primary.light;
  //const PRIMARY_MAIN = theme.palette.primary.main;
  //const PRIMARY_DARK = theme.palette.primary.dark;
  const isLight = theme.palette.mode === 'light';

  const logo = (
    <Box ref={ref} sx={{ height: 50, width: 180, cursor: 'pointer', ...sx }}>
                  <>
                    <Image
                      disabledEffect
                      alt="Anypay Logo"
                      src={
                        isLight ?
                        `https://doge.bitcoinfiles.org/4f913a35258626de7e07571b0ef8de39e9e77908570a4a4ae2af6072bb34a59d` :
                        'https://doge.bitcoinfiles.org/4bd0680e7545a42d76bb92c83415659cc6d66aae15d9f264062efc0cd7d1972e'
                      }
                      sx={{ width: 180 , height: 50 }}
                    />
                  </>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default Logo;
