import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //this prepares a datalayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); // this will wrap our app and provide the data layer

// next to pull information from the data layer
export const useStateValue = () => useContext(StateContext)
