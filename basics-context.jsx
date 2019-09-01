import React, { useContext, useState, createContext } from 'react'


// Creatin Context
export const initialState = {
    count: 0
}

export const counterContext = createContext(initialState)

// 

