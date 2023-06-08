import React, { createContext, useContext} from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducer/Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//el compose puedeser el redux devtools(con el que estoy trabajando) o el rdux normal. para poder aplicar un Middleware

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
); //esto nos permite hacer la req

const AppContext = createContext();
export function AppProvider({ children }) {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default store;

//configuracion de store y el contexto
// de react nececitamos import React, { createContext, useContext, useReducer } from 'react';
// importamos el redux lo usamos en la funcion stroe con el inicialState pero ya lo tengo configurado
