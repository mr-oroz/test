import React, {useReducer} from 'react';
import { MyContext } from "../MyContext/MyContext";
import { MyReducer } from '../MyReducer/MyReducer';
import { ADD_TO_QUESTION, REMOVE_QUESTION } from '../types';

const defaultState = {
  questions: JSON.parse(localStorage.getItem("questions")) || [],
  score: 0,
  modal: false
}

const MyState = ({children}) => {
  const [state, dispatch] = useReducer(MyReducer, defaultState);

  const addToquestion = (data) => {
    dispatch({type: ADD_TO_QUESTION, payload: data})
  }

  const removeQuestion = (id) => {
    dispatch({type: REMOVE_QUESTION, payload: id })
  }

  const checkScore = (bool) => {
    dispatch({type: "SCORE", payload: bool}) // payload true либо false
  }

  const toggleModal = (bool) => {
    dispatch({type: 'MODAL', payload: bool}) // payload true либо false
  }

  return (
    <MyContext.Provider value={{
      questions: state.questions,
      score: state.score,
      modal: state.modal,
      addToquestion,
      removeQuestion,
      checkScore,
      toggleModal
    }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;