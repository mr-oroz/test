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

const MyButton = ({children, onClick, type}) => {
  return (
    <ColorButton type={type} onClick={onClick}  variant='contained'>
    {children}
    </ColorButton>
  );
};

export default MyButton;