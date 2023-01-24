import React from 'react';
import s from './pass-test.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const PassTest = () => {
  return (
    <div className={s.passTest}>
      <div className="container">
        <div className={s.content}>
          <div className={s.left}>
            <h2>Вопросы</h2>
            <ul>
              <li>
                Что такое html?
              </li>
            </ul>
          </div>
          <div className={s.right}>
            <ul>
              <li>
                <h3>Что такое html?</h3>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Выберите ответ</FormLabel>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassTest;