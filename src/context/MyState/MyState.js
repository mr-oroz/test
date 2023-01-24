import React, {useReducer} from 'react';
import { MyContext } from "../MyContext/MyContext";
import { MyReducer } from '../MyReducer/MyReducer';
import { ADD_TO_QUESTION } from '../types';
const defaultState = {
  questions: []
}

const MyState = ({children}) => {
  const [state, dispatch] = useReducer(MyReducer, defaultState);

  const addToquestion = (data) => {
    dispatch({type: ADD_TO_QUESTION, payload: data})
  }
  return (
    <MyContext.Provider value={{
      questions: state.questions,
      addToquestion
    }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;