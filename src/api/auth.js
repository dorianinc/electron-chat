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
  console.log("----- Registering User -------");

  
  try {
    if (!email || !password || !username || !avatar) {
      throw new Error("Missing required fields for registration.");
    }

    const emailUnique = await isEmailUnique(email);
    if (!emailUnique) {
      console.log("Email is already in use.");
      throw new Error("Email is already in use.");
    }

    const usernameUnique = await isUsernameUnique(username);
    if (!usernameUnique) {
      console.log("Username is already in use.");
      throw new Error("Username is already in use.");
    }
    
    const docRef = doc(db, "profiles", email);
    const res = await setDoc(docRef, {
      email,
      username,
      password,
      avatar,
      joinedChats: [],
    });
    console.log("🖥️  res: ", res);
    console.log("Successful");

    const user = await signInUser({ email, password });
    return user;
  } catch (error) {
    console.log(`Unsuccessful returned error: ${error.message}`);
    throw new Error(`Registration failed: ${error.message}`);
  }
};

export const signInUser = async ({ email, password }) => {
  console.log("----- Signing in User -------");
  // console.log("🖥️  email: ", email);
  // console.log("🖥️  password: ", password);

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
  console.log("🖥️  email: ", email);

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
  console.log("🖥️  username: ", username);

  const usersRef = collection(db, "profiles"); // Replace 'users' with your collection name
  const q = query(usersRef, where("username", "==", username));

  const querySnapshot = await getDocs(q);
  console.log("🖥️  querySnapshot: ", querySnapshot)
  if (querySnapshot.empty) {
    return true;
  } else {
    return false;
  }
};
