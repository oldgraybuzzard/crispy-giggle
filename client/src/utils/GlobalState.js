import React, { createContext, useContext } from 'react';
import { useCourseReducer } from './reducers';

const storeContext = createContext();
const{ Provider } = storeContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCourseReducer({
    employers: [],
    cart: [],
    cartOpen: false,
    courses: [],
    currentCourse: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(storeContext);
};

export { StoreProvider , useStoreContext };