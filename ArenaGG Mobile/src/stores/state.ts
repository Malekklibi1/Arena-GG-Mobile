// Simple state management using React Context
import React, { createContext, useContext, useState } from "react";

const initialState = {
  userId: "",
  taskProgress: [],
  result: {},
  networkStatus: { isConnected: true },
  activityLog: [],
};

const StateContext = createContext({
  state: initialState,
  setState: (s: any) => {},
});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);
  return React.createElement(StateContext.Provider, { value: { state, setState } }, children);
};

export const useAppState = () => useContext(StateContext);
