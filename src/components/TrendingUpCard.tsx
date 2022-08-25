import * as React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';

export default function TrendingUpCard() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        height: '140px'
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Connection</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ? hours
      </Box>
      <Box
        component={TrendingUpIcon}
        sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
      />
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5
        }}
      >
        ?%
      </Box>
      <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
        vs. last week
      </Box>
    </Box>
  );
}
