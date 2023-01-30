import React, { useContext } from 'react';
import styles from './modal.module.css';
import { MyContext } from '../../context/MyContext/MyContext';
import { useNavigate } from 'react-router-dom';
import MyButton from '../my-button/my-button';
const Modal = () => {
  const { questions, score, toggleModal } = useContext(MyContext)
  const navigate = useNavigate();

  const handlerClick = () => {
    localStorage.removeItem('questions')
    navigate('/')
    toggleModal(false)
  }
  // 10 / 10
  let num = 100;
  let num2 = score
  let a = 0
  if(num % num2 >=0) {
    a = Math.floor(num/num2)
  }
  return (
    <div className={styles.modal}>
      <div className={styles.block}>
        <h1>вы отвечали {score} / {questions.length}</h1> 
        <h1>{a}%</h1>
        <MyButton onClick={handlerClick}>закрыт</MyButton>
      </div>
    </div>
  );
};

export default Modal;