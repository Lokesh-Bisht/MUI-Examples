import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';

const Input = styled('input')({
  display: 'none',
});

export const UploadButton = () => {
  return (
    <div className="element-content">
      <div className="element-type">
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  );
}