import React,
{ createContext, 
  useContext,
  UseReducer } 
  from "react";

  export const DataLayerContext = createContext();

  export const DataLayer = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
  
  export const useStateValue = () => useContext(StateContext);