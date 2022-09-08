import { add, load, addView } from './actions';
import { useReducer } from 'react';

export function reducer(state, action) {
  /* Evaluate the actions */
  switch (action.type) {
    case 'ADD':
      return add(state, action);
    case 'LOAD':
      return load(state, action);
    case 'ADD_VIEW':
      return addView(state, action);

    default:
  }
}

export default function useReducerApp() {
  return useReducer(reducer, { items: [] });
}
