import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/db";
import { useRouter } from "next/navigation";
import postFirebase from "./firebase/postFirebase";
import recourseType from "@/types/recourseType";
import getFirebase from "./firebase/getFirebase";
import getSavesUser from "./firebase/getSavesUser";

function useSaveRecourse(): (pin: recourseType) => void {
  const [user] = useAuthState(auth);
  const router = useRouter();

  async function saveRecourse(pin: recourseType): Promise<void> {
    //Verifica si hay un usuario
    !user && router.push("/createAccount");
    //obtiene su UID
    const userUid = user ? user?.uid : "";
    try {
      //obtiene sus guardados
      let saves = await getSavesUser(userUid);
      //verifica si ya esta guardado
      const isSaved = saves.some((pinSave) => pinSave.name === pin.name);
      if (isSaved) {
        saves = saves.filter((pinSaves) => pinSaves.name != pin.name);
      } else {
        saves = [...saves, pin];
      }

      postFirebase(user?.uid, {
        saves,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return saveRecourse;
}

export default useSaveRecourse;
