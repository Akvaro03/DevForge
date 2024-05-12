import { doc, setDoc } from "firebase/firestore";
import { db } from "./db";

function postFirebase(nameDocument: string | undefined, data: object): void {
    const cityRef = nameDocument ? doc(db, 'users', nameDocument) : doc(db, 'users');

    setDoc(cityRef, data, { merge: true });
}

export default postFirebase;