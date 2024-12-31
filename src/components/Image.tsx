// @ts-nocheck
import { LazyLoadImage } from 'react-lazy-load-image-component';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export type ImageRato = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  sx?: SxProps<Theme>;
  ratio?: ImageRato;
  disabledEffect?: boolean;
}

const LazyLoadImageWrapper = (props: any) => <LazyLoadImage {...props} />;

export default function Image({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  ...other
}: Props) {
  const content = (
    <Box
      component={LazyLoadImageWrapper}
      wrapperClassName="wrapper"
      effect={disabledEffect ? undefined : effect}
      placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
      sx={{ width: 1, height: 1, objectFit: 'cover' }}
      {...other}
    />
  );

  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        '& .wrapper': { width: 1, height: 1, backgroundSize: 'cover !important' },
        ...sx,
      }}
    >
      {content}
    </Box>
  );
}

// ----------------------------------------------------------------------

function getRatio(ratio = '1/1') {
  return {
    '4/3': 'calc(100% / 4 * 3)',
    '3/4': 'calc(100% / 3 * 4)',
    '6/4': 'calc(100% / 6 * 4)',
    '4/6': 'calc(100% / 4 * 6)',
    '16/9': 'calc(100% / 16 * 9)',
    '9/16': 'calc(100% / 9 * 16)',
    '21/9': 'calc(100% / 21 * 9)',
    '9/21': 'calc(100% / 9 * 21)',
    '1/1': '100%',
  }[ratio];
}
