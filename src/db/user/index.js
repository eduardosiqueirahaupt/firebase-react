import { addDoc, collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const COLLECTION = "users";

export const getUsers = async (db) => {
  const userCollection = collection(db, COLLECTION);
  const users = await getDocs(userCollection);
  return users.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getUserLogged = async (db) => {
  try {
    const emailLogged = getAuth().currentUser.email;
    const users = await getUsers(db);
    return users.find((x) => x.email === emailLogged);
  } catch (e) {
    return null;
  }
};

export const addUser = async (db, newUser) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, newUser.email, newUser.senha);

  const userCollection = collection(db, COLLECTION);
  return await addDoc(userCollection, newUser);
};

export const authUser = async (email, password) => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
};
