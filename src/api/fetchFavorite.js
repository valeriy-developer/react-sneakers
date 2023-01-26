import { db } from "../utils/firebase";
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  setDoc,
} from "firebase/firestore";

export const getFavoriteSneakers = async () => {
  const querySnapshotFavorite = await getDocs(collection(db, "favorite"));

  const cartData = querySnapshotFavorite.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return cartData;
};

export const deleteSneakers = async (id) => {
  await deleteDoc(doc(db, "favorite", id));
};

export const addNewSneaker = async (obj) => {
  await setDoc(doc(db, "favorite", obj.id), obj);
};
