import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, ListItemIcon, MenuItem, Checkbox, ListItemText, Menu, Button, ButtonGroup } from '@mui/material';

const FilterDropdown = ({ resources, onChange }) => {
    const [selectedResources, setSelectedResources] = useState(resources.map(resource => resource.name));
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleCheckboxChange = (event, resourceName) => {
      setSelectedResources(prevSelectedResources => {
        const index = prevSelectedResources.indexOf(resourceName);
        if (index === -1) {
          return [...prevSelectedResources, resourceName];
        } else {
          return [...prevSelectedResources.slice(0, index), ...prevSelectedResources.slice(index + 1)];
        }
      });
      event.stopPropagation();
    };
  
    const clearAll = () => {
      setSelectedResources([]);
      onChange([]);
    };
  
    const checkAll = () => {
      setSelectedResources(resources.map(resource => resource.name));
      onChange(resources.map(resource => resource.name));
    };
  
    const handleMenuItemClick = (event, resourceName) => {
      if (event.target.nodeName !== 'INPUT') {
        const index = selectedResources.indexOf(resourceName);
        if (index === -1) {
          setSelectedResources([...selectedResources, resourceName]);
        } else {
          setSelectedResources([...selectedResources.slice(0, index), ...selectedResources.slice(index + 1)]);
        }
      }
    };
  
    useEffect(() => {
      onChange(selectedResources);
    }, [selectedResources, onChange]);
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Resources</InputLabel>
          <Button onClick={handleClick} variant="outlined" style={{ textTransform: 'none' }}>
            {Array.isArray(selectedResources) && selectedResources.length > 0 ? selectedResources.join(', ') : 'Select Resources'}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem>
              <ButtonGroup size="small" fullWidth>
                <Button onClick={clearAll}>Clear All</Button>
                <Button onClick={checkAll}>Check All</Button>
              </ButtonGroup>
            </MenuItem>
            {resources.map(resource => (
              <MenuItem key={resource.name} onClick={event => handleMenuItemClick(event, resource.name)}>
                <ListItemIcon>
                  <Checkbox
                    checked={selectedResources.includes(resource.name)}
                    onChange={event => handleCheckboxChange(event, resource.name)}
                    value={resource.name}
                    style={{ marginRight: '16px' }}
                  />
                </ListItemIcon>
                <ListItemText primary={resource.name} />
              </MenuItem>
            ))}
          </Menu>
        </FormControl>
      </div>
    );
  };
  
  export default FilterDropdown;
  