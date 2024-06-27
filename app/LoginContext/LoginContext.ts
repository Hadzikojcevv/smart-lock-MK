import { createContext } from "react";

export type LoginContextValueType = {
    access: boolean,
    changeAccess: () => void
}

export const LoginContext = createContext({} as LoginContextValueType)