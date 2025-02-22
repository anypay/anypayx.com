// @mui
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
// utils
import { fDateTime } from '../../../../utils/formatTime';
// _mock_
import { _analyticOrderTimeline } from '../../../../_mock';

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none',
        },
      }}
    >
      <CardHeader title="Order Timeline" />
      <CardContent>
        {/* @ts-ignore */}
        <Timeline>
          {_analyticOrderTimeline.map((item, index) => (
            <OrderItem
              key={item.id}
              item={item}
              isLast={index === _analyticOrderTimeline.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type OrderItemProps = {
  item: {
    id: string;
    title: string;
    time: Date | string | number;
    type: string;
  };
  isLast: boolean;
};

function OrderItem({ item, isLast }: OrderItemProps) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
