import React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import NavigationIcon from '@mui/icons-material/Navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const FloatingActionButtons = () => {
  return (
    <div className="element">
      <h1>Floating Action Buttons</h1>
        <div className="element-container">
          <p>A floating action button (FAB) performs the primary, or most 
            common, action on a screen.</p>
          <h2>Basic FAB</h2>
          <p>A floating action button appears in front of all screen 
            content, typically as a circular shape with an icon in its 
            center. FABs come in two types: regular, and extended.</p>

          <p>Only use a FAB if it is the most suitable way to present a 
            screen's primary action. Only one component is recommended 
            per screen to represent the most common action.</p>
          <div className="element-content">
            <Fab color="primary" aria-label="add" style={{marginRight: "16px"}}>
              <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" style={{marginRight: "16px"}}>
              <EditIcon />
            </Fab>
            <Fab variant="extended" style={{marginRight: "16px"}}>
              <NavigationIcon sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </div>
        {/* </div>
        <div className="element-container"> */}
          <h2>Size and color</h2>
          <div className="element-content">
            <Fab size="small" color="secondary" aria-label="add" style={{marginRight: "16px"}}>
              <AddIcon />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="add" style={{marginRight: "16px"}}>
              <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
    </div>
  );
}