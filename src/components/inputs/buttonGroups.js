import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export const ButtonGroups = () => {
  return (
    <div className="element">
      <h1>Button group</h1>
      <div className="element-container">
        <p>The ButtonGroup component can be used to group related buttons.</p>
        <h2>Basic button group</h2>
        <div className="element-content">
          <p>The buttons can be grouped by wrapping them with the ButtonGroup 
            component. They need to be immediate children.</p>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="element-container">
        <h2>Sizes and colors</h2>
        <div className="element-content">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup size="small" aria-label="small button group">
              {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
              {buttons}
            </ButtonGroup>
            <ButtonGroup size="large" aria-label="large button group">
              {buttons}
            </ButtonGroup>
          </Box>
        </div>
      </div>
      <div className="element-container">
        <h2>Vertical button group</h2>
        <div className="element-content">
          <Box
            sx={{
              display: 'flex',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              {buttons}
            </ButtonGroup>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="contained"
            >
              {buttons}
            </ButtonGroup>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              {buttons}
            </ButtonGroup>
          </Box>
        </div>
      </div>
    </div>
  );
}