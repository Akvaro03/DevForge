"use client";

import { auth } from "@/db/firebase/db";
import useGetFirebase from "@/hooks/useGetFirebase";
import recourseType from "@/types/recourseType";
import { User } from "firebase/auth";
import {
  Dispatch,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
interface ContextProps {
  user: User | null | undefined;
  pinSave: recourseType[];
  resetPins: Dispatch<void>;
  isPinSave: (a: string) => boolean;
}

const GlobalContext = createContext<ContextProps>({
  user: null,
  pinSave: [],
  resetPins: () => [],
  isPinSave: (): boolean => false,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode | ReactElement;
}) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [pinSave, setPinSave] = useState<[] | recourseType[]>([]);
  const { pins, resetPins } = useGetFirebase();
  const [userAuth] = useAuthState(auth);

  const isPinSave = (namePin: string): boolean => {
    return pinSave ? pinSave.some((pin) => pin.name === namePin) : false;
  };

  useEffect(() => {
    setUser(userAuth);
    resetPins();
  }, [userAuth, resetPins]);

  useEffect(() => {
    setPinSave(pins);
  }, [pins]);

  return (
    <GlobalContext.Provider value={{ pinSave, user, resetPins, isPinSave }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
