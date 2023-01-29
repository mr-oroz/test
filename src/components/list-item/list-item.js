import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/MyContext/MyContext';
import List from '../list/list';
const ListItem = (props) => {
  const { question, id, variants, completed } = props;
  const { correctCheck, changeCompleted } = useContext(MyContext)

  const handlerClick = (correct) => {
    correctCheck(correct)
  }

  return (
    <li>
      <h3>{question}</h3>
      <span>Выберите ответ</span>
      <List
        items={variants}
        renderItem={(elem, index) => {
          return <div key={index} className='form-control'>
            <input
              onClick={() => handlerClick(elem.correct)}
              name={id}
              type="radio" />
              <label htmlFor="">{elem.variant}</label>
          </div>
        }}
      />
    </li>
  );
};

export default ListItem;