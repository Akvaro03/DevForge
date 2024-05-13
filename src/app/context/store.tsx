"use client"

import { auth } from "@/db/firebase/db"
import useGetFirebase from "@/hooks/useGetFirebase"
import recourseType from "@/types/recourseType"
import { User } from "firebase/auth"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
interface ContextProps {
    user: User | null | undefined,
    setUser: Dispatch<SetStateAction<User | null | undefined>>,
    pinSave: recourseType[],
    setPinSave: Dispatch<SetStateAction<recourseType[]>>
}

const GlobalContext = createContext<ContextProps>({
    user: null,
    setUser: () => "",
    pinSave: [],
    setPinSave: () => []
})

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState<User | null | undefined>(null)
    const [pinSave, setPinSave] = useState<[] | recourseType[]>([])
    const { pins } = useGetFirebase()
    const [userAuth] = useAuthState(auth)

    useEffect(() => {
        setPinSave(pins)
        setUser(userAuth)
    }, [pins])


    return (
        <GlobalContext.Provider value={{ pinSave, setPinSave, setUser, user }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)