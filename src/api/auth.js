import { db } from "../db/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import {
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const registerUserOnFireBase = async (email, password) => {
  console.log("🖥️  email, password : ", email, password);

  const auth = getAuth();

  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    const errorCode = error.code;
    console.log("🖥️  errorCode: ", errorCode);
    const errorMessage = error.message;
    console.log("🖥️  errorMessage: ", errorMessage);
    // ..
  }
};

export co

export const registerUser = async ({ email, password, username, avatar }) => {
  console.log("----- Registering User -------");
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
    await registerUserOnFireBase(email, password)
    return user;
  } catch (error) {
    console.log(`Unsuccessful returned error: ${error.message}`);
    throw new Error(`${error.message}`);
  }
};

export const signInUser = async ({ email, password }) => {
  console.log("----- Signing in User -------");

  try {
    const docRef = doc(db, "profiles", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      if (user.password === password) {
        return user;
      } else {
        console.log("--- wrong password ---");
        throw new Error("Incorrect email or password");
      }
    } else {
      console.log("--- user does not exist ---");
      throw new Error("Incorrect email or password");
    }
  } catch (error) {
    console.error("Error signing in user:", error.message);
    throw new Error(`Sign-in failed: ${error.message}`);
  }
};

export const isEmailUnique = async (email) => {
  console.log("----- Checking if Email is Unique -------");

  const docRef = doc(db, "profiles", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return false;
  } else {
    return true;
  }
};

export const isUsernameUnique = async (username) => {
  console.log("----- Checking if Username is Unique -------");

  const usersRef = collection(db, "profiles");
  const q = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return false;
  } else {
    return true;
  }
};
