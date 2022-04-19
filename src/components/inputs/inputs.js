import React from 'react'
import { ButtonGroups } from './buttonGroups';
import { Button } from './buttons/button'
import { Checkboxes } from './checkboxes';
import { FloatingActionButtons } from './floatingActionButtons';
import { Radiobuttons } from './radioButtons';

export const Inputs = () => {
  return (
    <div>
      <Button/>
      <ButtonGroups/>
      <Checkboxes/>
      <FloatingActionButtons/>
      <Radiobuttons/>
    </div>
  );
}