import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#00b894',
  '&:hover': {
    backgroundColor: '#00b894',
  },
}));

const MyButton = ({children}) => {
  return (
    <ColorButton  variant='contained'>
    {children}
    </ColorButton>
  );
};

export default MyButton;