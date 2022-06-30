import { useState } from 'react';
// @mui
import { TextField, InputAdornment } from '@mui/material';
// ----------------------------------------------------------------------

type Props = {
  value: string;
};

export default function CopyClipboard({ value, ...other }: Props) {
  const [state, setState] = useState({
    value,
    copied: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ value: event.target.value, copied: false });
  };

  return (
    <TextField
      fullWidth
      value={state.value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" />
        ),
      }}
      {...other}
    />
  );
}
