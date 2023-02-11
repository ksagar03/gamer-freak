// here I'm using react context API so that items which will be there in gamefreak store can be accessed by all the components i.e it will create a data layer which can be accessed by any components

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //this prepares a datalayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); // this will wrap our app and provide the data layer
/* here this "StateProvider" needs to be wraped with the components which requires data saved in the data layer, here I require this datalayer to be wraped up with all the components, so for this i will be wraping this "StateProvider" to App component which is rendered in index.js file, for more information check "index.js "file */

// next to pull information from the data layer
export  const useStateValue = () => useContext(StateContext)
