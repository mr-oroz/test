import { ADD_TO_QUESTION, SCORE, REMOVE_QUESTION } from "../types";

export const MyReducer = (state, action) => {

  const { questions, score } = state;
  const { payload, type } = action;

  switch (type) {
    case ADD_TO_QUESTION: {
      const newItem = {
        id: Date.now(),
        question: payload.create,
        variant: payload.variant,
        variants: [
          { variant: payload.variantA, value: 'a', correct: payload.variant === 'a' ? true : false },
          { variant: payload.variantB, value: 'b', correct: payload.variant === 'b' ? true : false  },
          { variant: payload.variantC, value: 'c', correct: payload.variant === 'c' ? true : false  },
        ],
        completed: false
      }
      const newArr = [...state.questions, newItem]
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
    case SCORE: {
      if(payload.correct === true) {
        return {
          ...state,
          score: score + 1
        }
      }
    }

    default:
      return state
  }
}