import { db } from "../utils/firebase";
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  setDoc,
} from "firebase/firestore";

export const getCartSneakers = async () => {
  const querySnapshotCart = await getDocs(collection(db, "cart"));

  const cartData = querySnapshotCart.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return cartData;
};

export const deleteSneakers = async (id) => {
  await deleteDoc(doc(db, "cart", id));
};

export const addNewSneaker = async (obj) => {
  await setDoc(doc(db, "cart", obj.id), obj);
};
