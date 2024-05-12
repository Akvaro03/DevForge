import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "./db";

async function getFirebase(nameDocument: string): Promise<DocumentData | undefined> {
    const docRef = doc(db, "users", nameDocument);
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}

export default getFirebase;