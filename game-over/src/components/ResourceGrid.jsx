import React from 'react';
import { Grid } from '@mui/material';
import ResourceCard from './ResourceCard';

const ResourceGrid = ({ resources }) => (
  <Grid container spacing={4}>
    {resources.map(resource => (
      <Grid item xs={12} sm={6} md={4} key={resource.name}>
        <ResourceCard resource={resource} />
      </Grid>
    ))}
  </Grid>
);

export default ResourceGrid;
