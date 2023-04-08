import './App.css';

import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import ResourceGrid from './components/ResourceGrid';
import DateSlider from './components/DateSlider';
import FilterDropdown from './components/FilterDropdown';
import resourcesData from './data/resources.json';

const App = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  const [filteredResources, setFilteredResources] = useState(resourcesData);
  const [visibleResources, setVisibleResources] = useState(resourcesData);

  useEffect(() => {
    const updatedResources = filteredResources.map(resource => {
      // Update the remaining amount based on the new date and consumption rate
      const yearsPassed = date - 2023;
      const consumed = resource.consumptionRate * yearsPassed * resource.originalAmount;
      const remainingAmount = Math.max(resource.originalAmount - consumed, 0);

      return {
        ...resource,
        remainingAmount
      };
    });

    setVisibleResources(updatedResources);
  }, [date, filteredResources]);

  const handleFilterChange = selectedResources => {
    setFilteredResources(resourcesData.filter(resource => selectedResources.includes(resource.name)));
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={4}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DateSlider date={date} setDate={setDate} />
          <FilterDropdown resources={resourcesData} onChange={handleFilterChange} />
        </div>
      </Box>
      <ResourceGrid resources={visibleResources} />
    </Container>
  );
};

export default App;
