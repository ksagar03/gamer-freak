// here I'm using react context API so that items which will be there in gamefreak store can be accessed by all the components i.e it will create a data layer which can be accessed by any components
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //this prepares a datalayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); // this will wrap our app and provide the data layer

// next to pull information from the data layer
export const useStateValue = () => useContext(StateContext)
