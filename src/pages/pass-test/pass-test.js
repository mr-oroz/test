import React, { useContext, useState } from 'react';
import s from './pass-test.module.css';
import { MyContext } from '../../context/MyContext/MyContext';
import List from '../../components/list/list';
import ListItem from '../../components/list-item/list-item';
import MyButton from '../../components/my-button/my-button';

const PassTest = () => {
  const { questions, score } = useContext(MyContext);
  console.log(questions)
  if (questions.length === 0) {
    return <h1
      style={{
        textAlign: 'center',
        marginTop: '50px'
      }}>пока нет тесты</h1>
  }
  const handlerClickTotal = () => {
    console.log(score)
  }
  return (
    <div className={s.passTest}>
      <div className="container">
        <div className={s.content}>
          <div className={s.left}>
            <h2>Вопросы</h2>
            <ol className={s.questions}>
              <List
                items={questions}
                renderItem={(elem) => <li
                  key={elem.id}>
                  {elem.question}
                </li>}
              />
            </ol>
          </div>
          <div className={s.right}>
            <ol>
              <List
                items={questions}
                renderItem={(elem, index) => <ListItem
                  key={elem.id}
                  index={index}
                  {...elem} />}
              />
            </ol>
            <div className={s.btn}>
              <MyButton onClick={handlerClickTotal}>
                Cохранить
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassTest;