import { React, useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import pink from '@mui/material/colors/pink'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { red } from '@mui/material/colors'

const Catalogues = [
  {
    id: "1",
    name: "Potato"
  },
  {
    id: "2",
    name: "Tomato"
  },
  {
    id: "3",
    name: "Onion"
  },
];

const Checkbox2 = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};


export const Checkboxes = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const catalog = list.map(({ id, name }) => {
    return (
      <li  key={id} style={{listStyle:"none"}}>
        <Checkbox2
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </li>
    );
  });

  return (
    <div className="element">
      <h1>Checkboxes</h1>
      <div className="element-container">
        <h2>Basic checkboxes</h2>
        <div className="element-content">
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </div>
      </div>
      <div className="element-container">
        <h2>Label</h2>
        <div className="element-content">
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </div>
      </div>
      <div className="element-container">
        <h2>Size</h2>
        <div className="element-content">
          <Checkbox defaultChecked size="small" />
          <Checkbox defaultChecked size="medium" />
          <Checkbox defaultChecked size="large" />
        </div>
      </div>
      <div className="element-container">
        <h2>Color</h2>
        <div className="element-content">
          <Checkbox defaultChecked />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" />
          <Checkbox defaultChecked color="default" />
          <Checkbox defaultChecked color="error" />
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
            />
        </div>
      </div>
      <div className="element-container">
        <h2>Icon</h2>
        <div className="element-content">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
            sx={{
              color: red[200],
              '&.Mui-checked': {
                color: red[500],
              },
            }}
          />
          <Checkbox icon={<BookmarkBorderIcon />} 
            checkedIcon={<BookmarkIcon />}
          />
        </div>
      </div>
      <div className="element-container">
        <h2>Select all</h2>
        <div className="element-content">
          <Checkbox2
            type="checkbox"
            name="selectAll"
            id="selectAll"
            handleClick={handleSelectAll}
            isChecked={isCheckAll}
          />
          Select All
          {catalog}
        </div>
      </div>
    </div>
  );
}