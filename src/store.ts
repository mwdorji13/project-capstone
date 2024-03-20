// src/store.ts
import { createStore } from 'redux';

// Action types
const SET_PAGE = 'SET_PAGE';

// Action creators
export const setPage = (page: string) => ({ type: SET_PAGE, payload: page });

// Reducer
const initialState = {
  page: 'home' // Default to home page
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

// Store
export const store = createStore(rootReducer);

// RootState
export type RootState = ReturnType<typeof rootReducer>;
