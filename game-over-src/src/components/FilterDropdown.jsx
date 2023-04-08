import React, { useState, useEffect } from "react";
import {
  FormControl,
  ListItemIcon,
  MenuItem,
  Checkbox,
  ListItemText,
  Menu,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";

const FilterDropdown = ({ resources, onChange }) => {
  const [selectedResources, setSelectedResources] = useState(
    resources.map((resource) => resource.name)
  );
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (event, resourceName) => {
    setSelectedResources((prevSelectedResources) => {
      const index = prevSelectedResources.indexOf(resourceName);
      if (index === -1) {
        return [...prevSelectedResources, resourceName];
      } else {
        return [
          ...prevSelectedResources.slice(0, index),
          ...prevSelectedResources.slice(index + 1),
        ];
      }
    });
    event.stopPropagation();
  };

  const clearAll = () => {
    setSelectedResources([]);
    onChange([]);
  };

  const checkAll = () => {
    setSelectedResources(resources.map((resource) => resource.name));
    onChange(resources.map((resource) => resource.name));
  };

  const handleMenuItemClick = (event, resourceName) => {
    if (event.target.nodeName !== "INPUT") {
      const index = selectedResources.indexOf(resourceName);
      if (index === -1) {
        setSelectedResources([...selectedResources, resourceName]);
      } else {
        setSelectedResources([
          ...selectedResources.slice(0, index),
          ...selectedResources.slice(index + 1),
        ]);
      }
    }
  };

  useEffect(() => {
    onChange(selectedResources);
  }, [selectedResources, onChange]);

  return (
    <div>
      <FormControl fullWidth variant="outlined" sx={{ width: "200px" }}>
        <Button
          onClick={handleClick}
          variant="outlined"
          style={{
            textTransform: "none",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            display: "block",
          }}
        >
          {Array.isArray(selectedResources) && selectedResources.length > 0
            ? selectedResources.join(", ")
            : "Select Resources"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 93 * 4.5,
            },
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              width: "fit-content",
              minWidth: "20ch",
              maxWidth: "30ch",
            }}
          >
            <MenuItem>
              <ButtonGroup size="small" fullWidth>
                <Button onClick={clearAll}>Clear All</Button>
                <Button onClick={checkAll}>Check All</Button>
              </ButtonGroup>
            </MenuItem>
            <Box
              sx={{
                height: "6px",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))",
              }}
            ></Box>
            <Box
              sx={{
                overflowY: "auto",
                maxHeight: 88 * 4.5,
              }}
            >
              {resources.map((resource) => (
                <MenuItem
                  key={resource.name}
                  onClick={(event) => handleMenuItemClick(event, resource.name)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={selectedResources.includes(resource.name)}
                      onChange={(event) =>
                        handleCheckboxChange(event, resource.name)
                      }
                      value={resource.name}
                      style={{ marginRight: "16px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={resource.name} />
                </MenuItem>
              ))}
            </Box>
          </Box>
        </Menu>
      </FormControl>
    </div>
  );
};

export default FilterDropdown;
