import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getSneakers = async () => {
  const querySnapshotSneakers = await getDocs(collection(db, "items"));

  const sneakersData = querySnapshotSneakers.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return sneakersData;
};
