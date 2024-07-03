import { db } from "../db/firestore";
import {
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const registerUser = async ({ email, password, username, avatar }) => {
  try {
    if (!email || !password || !username || !avatar) {
      throw new Error("Missing required fields for registration.");
    }

    const emailUnique = await isEmailUnique(email);
    if (!emailUnique) {
      throw new Error("Email is already in use.");
    }

    const usernameUnique = await isUsernameUnique(username);
    if (!usernameUnique) {
      throw new Error("Username is already in use.");
    }

    const docRef = doc(db, "profiles", email);
    await setDoc(docRef, {
      email,
      username,
      password,
      avatar,
      joinedChats: [],
    });

    const user = await signInUser({ email, password });
    return user;
  } catch (error) {
    console.log(`Unsuccessful returned error: ${error.message}`);
    throw new Error(`${error.message}`);
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    const docRef = doc(db, "profiles", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      if (user.password === password) {
        console.log("this is your user: ", user);
        return user;
      } else {
        throw new Error("Incorrect email or password");
      }
    } else {
      throw new Error("Incorrect email or password");
    }
  } catch (error) {
    throw new Error(`Sign-in failed: ${error.message}`);
  }
};

export const isEmailUnique = async (email) => {
  const docRef = doc(db, "profiles", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return false;
  } else {
    return true;
  }
};

export const isUsernameUnique = async (username) => {
  const usersRef = collection(db, "profiles");
  const q = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return false;
  } else {
    return true;
  }
};
