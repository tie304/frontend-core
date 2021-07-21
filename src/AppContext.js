import React, { useReducer, useState } from "react";
import AppStateReducer from "./reducers/AppState";

const AppContext = React.createContext();
const initalAppState = {
  authenticated: false,
};
const AppContextProvider = ({ children }) => {
  const [appState, appStateDispatch] = useReducer(
    AppStateReducer,
    initalAppState
  );

  return (
    <AppContext.Provider value={{ appState, appStateDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
