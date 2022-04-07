import React from 'react'
import Button from '@mui/material/Button'

export const BasicButtons = () => {
  return (
    <div className="element-content">
      <h3>Text, Contained, and outlined buttons</h3>
      <div className="element-type">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <h3>Size</h3>
      <div className="size">
        <Button variant="text" size="small">Small</Button>
        <Button variant="text" size="medium">Medium</Button>
        <Button variant="text" size="large">Large</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
        <Button variant="outlined" size="small">Small</Button>
        <Button variant="outlined" size="medium">Medium</Button>
        <Button variant="outlined" size="large">Large</Button>
      </div>
      <h3>Color</h3>
      <div className="color">
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
    </div>
  );
}