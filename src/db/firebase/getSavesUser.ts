import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "./db";
import recourseType from "@/types/recourseType";

async function getSavesUser(
  nameDocument: string
): Promise<recourseType[]> {
  const docRef = doc(db, "users", nameDocument);
  const docSnap = await getDoc(docRef);
  const docFormate = docSnap.data() as { saves: Array<recourseType> };
  return docFormate === undefined ? [] : docFormate.saves;
}

export default getSavesUser;
