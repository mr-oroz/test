import { ADD_TO_QUESTION, REMOVE_QUESTION } from "../types";

export const MyReducer = (state, action) => {

  const { questions, score } = state;
  const { payload, type  } = action;

  switch (type) {
    case ADD_TO_QUESTION: {
      const newItem = {
        id: Date.now(),
        question: payload.create,
        variant: payload.variant, // a b c
        variants: [
          { variant: payload.variantA, value: 'a', correct: payload.variant === 'a' ? true : false },
          { variant: payload.variantB, value: 'b', correct: payload.variant === 'b' ? true : false  },
          { variant: payload.variantC, value: 'c', correct: payload.variant === 'c' ? true : false  },
        ],
        completed: false
      }
      const newArr = [...questions, newItem]
      return {
        ...state,
        questions: newArr
      }
    }
    case REMOVE_QUESTION: {
      const newArr = questions.filter(elem => elem.id !== payload)
      return {
        ...state,
        questions: newArr
      }
    }
    case "SCORE" : {
      if(payload === true) {
        return {
          ...state,
          score: score + 1
        }
      }
    }
    case "MODAL" : {
      return {
        ...state,
        modal: payload // true false
      }
    }
    default:
      return state
  }
}