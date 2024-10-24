import { auth } from "@/db/firebase/db";
import getFirebase from "@/db/firebase/getFirebase";
import getSavesUser from "@/db/firebase/getSavesUser";
import recourseType from "@/types/recourseType";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function useGetFirebase() {
  const [pins, setPins] = useState<Array<recourseType>>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    getSaves(user, setPins);
  }, [user]);

  function resetPins() {
    setTimeout(() => {
      getSaves(user, setPins);
    }, 100);
  }

  return { pins, resetPins };
}

function getSaves(
  user: User | null | undefined,
  setPins: (a: Array<recourseType>) => void
) {
  if (!user) {
    setPins([]);
    return;
  }
  const userUid = user.uid;
  getSavesUser(userUid).then((data) => setPins(data));
}
export default useGetFirebase;
