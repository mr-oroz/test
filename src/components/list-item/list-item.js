import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext/MyContext';
import List from '../list/list';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const ListItem = (props) => {
  const { question, variants,  id} = props;
  const { correctCheck } = useContext(MyContext)

  const handlerClick = (correct) => {
    correctCheck(correct)
  }

  return (
    <li> 
      <h3>{question}</h3>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Выберите ответ</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <List
            items={variants}
            renderItem={(elem, index) => <FormControlLabel
              key={index}
              name={id}
              value={elem.value}
              onClick={() => handlerClick(elem.correct)}
              control={<Radio />}
              label={elem.variant} />} />
        </RadioGroup>
      </FormControl>
    </li>
  );
};

export default ListItem;