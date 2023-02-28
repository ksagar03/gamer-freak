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
export  const useStateValue = () => {
  const useStateval= useContext(StateContext) 
    if (useStateval === undefined)
    {
      throw new Error("stateprovider is not wraped for the component please check")
    }
    return useStateval
  }

// Note: using or calling datalayer in all the components will cause rerendering of each component(data layer will be called in this component) whenever a data is added or removed.
// if the datalayer is coverd only two components and user tries to access in 3rd component then that will throw a undefined state error 
// ---- Eg:-> 
// // export  const useStateValue = () => {
//   const useStateval= useContext(StateContext) 
//   if (useStateval === undefined)
//   {
//     throw new Error("stateprovider is not wraped for this components")
//   }
//   return useStateval

// }

