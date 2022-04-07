import React from 'react'
import Button from '@mui/material/Button'

export const TextButton = () => {
  return (
    <div className="element-content">
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </div>
  );
}