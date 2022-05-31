import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { Box, BoxProps } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const MarkLogo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) => {
  //const theme = useTheme();
  //const PRIMARY_LIGHT = theme.palette.primary.light;
  //const PRIMARY_MAIN = theme.palette.primary.main;
  //const PRIMARY_DARK = theme.palette.primary.dark;
  //const isLight = theme.palette.mode === 'light';

  const logo = (
    <Box ref={ref} sx={{ height: 64, width: 64, cursor: 'pointer', ...sx }}>
                  <>
                    <Image
                      disabledEffect
                      alt="Anypay Logo"
                      src={'https://doge.bitcoinfiles.org/2771f8367d5f512e05d8dd67e6980fc4a5f29a8551377b536bbda1fa92e376ca'}
                      sx={{ width: 64 , height: 64 }}
                    />
                  </>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default MarkLogo;
