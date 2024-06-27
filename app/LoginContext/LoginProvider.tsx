'use client'
import React, { useState } from 'react'
import { LoginContext, LoginContextValueType } from './LoginContext'

type LoginProviderPropsType = {

    children: React.ReactNode
}

const LoginProvider = ({children}: LoginProviderPropsType) => {

    const [access, setAccess] = useState(false)

    const changeAccess = () => {

        setAccess(!access)
    }

    const returnValue: LoginContextValueType = {
        access,
        changeAccess
    }

  return (
    <LoginContext.Provider value={returnValue}>

        {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider