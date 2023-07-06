import React, {  useContext, useReducer, useState } from 'react'
import { createContext } from 'react';
import { cardReducer } from './context/reducer';
const pro = {
  products:[],
  cart:[]
}
const CardT = createContext();

const Context = ({children}) => {
  const [state, dispatch]  = useReducer(cardReducer, pro)
  return (
    <CardT.Provider value={{state, dispatch}}>
        {children}
    </CardT.Provider>
  )
};

export const CartState = () => {
  return useContext(CardT);
};

export default Context;