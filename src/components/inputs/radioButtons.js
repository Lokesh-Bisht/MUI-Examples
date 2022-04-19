import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'


export const Radiobuttons = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="element">
      <h1>Radio Buttons</h1>
      <div className="element-container">
        <p>Radio buttons allow the user to select one option from a set. 
          Use radio buttons when the user needs to see all available 
          options. If available options can be collapsed, consider using 
          a Select component because it uses less space.</p>
        <h2>Radio group</h2>
        <p>RadioGroup is a helpful wrapper used to group Radio components 
          that provides an easier API, and proper keyboard accessibility 
          to the group.</p>
        <div className="element-content">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="element-container">
        <h2>Direction</h2>
        <div className="element-content">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>   
      <div className="element-container">
        <h2>Controlled</h2>
        <p>You can control the radio with the value and onChange 
          props:</p>
        <div className="element-content">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}