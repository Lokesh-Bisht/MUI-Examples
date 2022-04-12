import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

export const LoadingButtons = () => {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div className="element-content">
      <p>The loading buttons can show loading state and disable interactions.</p>
      <h3>Disabled buttons</h3>
      <div className="disabled">
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon /> }
          variant="outlined"
        >
          Save
        </LoadingButton>
      </div>
      <div className="toggle-buttons">
        <h3>Toggle button</h3>
        <Box>
          <FormControlLabel
            sx={{
              display: 'block',
            }}
            control={
              <Switch
                checked={loading}
                onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
              />
            }
            label="Loading"
          />
          <Box sx={{ '& > button': { m: 1 } }}>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              variant="outlined"
              disabled
            >
              disabled
            </LoadingButton>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingIndicator="Loading..."
              variant="outlined"
            >
              Fetch data
            </LoadingButton>
            <LoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </LoadingButton>
            <LoadingButton
              color="secondary"
              onClick={handleClick}
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
            >
              Save
            </LoadingButton>
          </Box>
        </Box>
      </div>
    </div>
  );
}