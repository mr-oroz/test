import React, {useReducer} from 'react';
import { MyContext } from "../MyContext/MyContext";
import { MyReducer } from '../MyReducer/MyReducer';
import { ADD_TO_QUESTION, SCORE, REMOVE_QUESTION } from '../types';

const defaultState = {
  questions: JSON.parse(localStorage.getItem("questions")) || [],
  score: 0
}

const MyState = ({children}) => {
  const [state, dispatch] = useReducer(MyReducer, defaultState);

  const addToquestion = (data) => {
    dispatch({type: ADD_TO_QUESTION, payload: data})
  }

  const removeQuestion = (id) => {
    dispatch({type: REMOVE_QUESTION, payload: id })
  }

  const correctCheck = (correct) => {
    dispatch({type: SCORE, payload: {correct}})
  }

  return (
    <MyContext.Provider value={{
      questions: state.questions,
      score: state.score,
      addToquestion,
      removeQuestion,
      correctCheck,
    }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;