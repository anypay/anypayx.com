require('dotenv').config()
/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'anypayx.com',
    API_BASE: process.env.NEXT_PUBLIC_API_BASE || 'https://anypayx.com',
  },
});
