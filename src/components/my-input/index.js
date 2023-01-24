import React from 'react';
import TextField from '@mui/material/TextField';

const MyInput = ({ label, value, onChange, name }) => {
  return (
    <TextField
      sx={{
        width: '100%',
        backgroundColor: '#fff'
      }}
      name={name}
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label={label}
      variant="outlined" />
  );
};

export default MyInput;