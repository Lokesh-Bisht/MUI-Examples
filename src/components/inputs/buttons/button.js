import React from 'react'
import { BasicButtons } from './basicButtons';
import { IconAndLabelButton } from './iconAndLabelButton';
import { TextButton } from './textButton';
import { UploadButton } from './uploadButton';
import { IconButtons } from './iconButtons';
import { LoadingButtons } from './loadingButtons';


export const Button = () => {
  return (
    <div className="element">
      <h1>Buttons</h1>
      <div className="element-container">
        <h2>Basic buttons</h2>
        <BasicButtons />
      </div>
      <div className="element-container">
        <h2>Text buttons</h2>
        <TextButton />
      </div>
      <div className="element-container">
        <h2>Upload button</h2>
        <UploadButton />
      </div>
      <div className="element-container">
        <h2>Buttons with icons and label</h2>
        <IconAndLabelButton />
      </div>
      <div className="element-container">
        <h2>Icon Buttons</h2>
        <IconButtons />
      </div>
      <div className="element-container">
        <h2>Loading Buttons</h2>
        <LoadingButtons />
      </div>
    </div>
  );
}