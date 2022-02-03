import { useReducer } from 'react';

import {
  UPDATE_EMPLOYERS,
  UPDATE_CURRENT_EMPLOYER,
  UPDATE_EMPLOYEES,
  UPDATE_CURRENT_EMPLOYEE,
  UPDATE_COURSES,
  UPDATE_CURRENT_COURSE,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type){
    case UPDATE_EMPLOYERS:
    return {
      ...state,
      employers: [...action.employers]
    };
    case UPDATE_CURRENT_EMPLOYER:
    return {
      ...state,
      currentEmployer: action.currentEmployer
    };
    case UPDATE_EMPLOYEES:
      return {
        ...state,
        employees: [...action.employees]
    };
    case UPDATE_CURRENT_EMPLOYEE:
      return {
        ...state,
        currentEmployee: action.currentEmployee
      };
    case UPDATE_COURSES:
      return {
        ...state,
        courses: [...action.courses]
      };
    case UPDATE_CURRENT_COURSE:
      return {
        ...state,
        currentCourse: action.currentCourse
      };
    case ADD_TO_CART: 
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.employer]
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.employers],
      };
    case REMOVE_FROM_CART:
        let newState = state.cart.filter(employer => {
          return employer._id !== action._id;
      });
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState
        };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(employer => {
          if (action._id === employer._id) {
            employer.purchseQuantity = action.purchseQuantity;
          }
          return employer;
        })
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: ! state.cartOpen
      };      

    default:
      return state;
  }
};

export function useCourseReducer(initialState) {
  return useReducer(reducer, initialState);
}