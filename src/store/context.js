import React, { createContext } from 'react'
import { initialValues } from "./state"

export const userAuth = createContext()

const { Provider }= userAuth;

const userAuthProvider = ({children})=>{

    return (
        <Provider value={{initialValues: initialValues}}>
            {children}
        </Provider>
    )
}

export default userAuthProvider;