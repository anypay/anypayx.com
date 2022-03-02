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
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
                  <>
                    <Image
                      disabledEffect
                      alt="Anypay Logo"
                      src={`https://doge.bitcoinfiles.org/bfcae220cb1cc0ce4322b463092d9216cd6caad42eb078f6e113857751a61753`}
                      sx={{ width: 32, height: 32 }}
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
