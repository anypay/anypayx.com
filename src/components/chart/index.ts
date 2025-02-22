import dynamic from 'next/dynamic';

// @ts-ignore
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ----------------------------------------------------------------------

export { default as ChartStyle } from './ChartStyle';
export { default as BaseOptionChart } from './BaseOptionChart';

export default ReactApexChart;
