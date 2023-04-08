import React from 'react';
import { Slider, Typography } from '@mui/material';

const DateSlider = ({ date, setDate }) => (
  <>
    <Typography>Year: {date}</Typography>
    <Slider
      value={date}
      onChange={(event, newValue) => setDate(newValue)}
      min={2023}
      max={2300}
      valueLabelDisplay="auto"
    />
  </>
);

export default DateSlider;
