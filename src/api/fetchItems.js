import { db } from "../utils/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export const getSneakers = async () => {
  const querySnapshotSneakers = await getDocs(collection(db, "items"));

  const sneakersData = querySnapshotSneakers.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return sneakersData;
};

export const updateSneakers = async (id, obj) => {
  const res = await updateDoc(doc(db, "items", id), { ...obj });

  return res;
};
