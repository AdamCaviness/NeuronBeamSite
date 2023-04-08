import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

const ResourceCard = ({ resource }) => {
  const consumedPercentage = ((resource.originalAmount - resource.remainingAmount) / resource.originalAmount) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{resource.name}</Typography>
        <Typography variant="body1">{resource.info}</Typography>
        <LinearProgress variant="determinate" value={consumedPercentage} />
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
