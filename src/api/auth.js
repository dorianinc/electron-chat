import { db } from "../db/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const createUserProfile = async (userProfile)  => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "profiles"));
  
  querySnapshot.forEach((doc) => {
    const chatData = doc.data();
    chatData.id = doc.id;
    data.push(chatData)
  });
  return data;
}

export const register = ({ email, password }) => {
  console.log("🖥️  email, password : ", email, password);

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, "test10@example.com", "testpassword").then((userCredential) => {
      console.log("🖥️  userCredential: ", userCredential);
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log("🖥️  errorCode: ", errorCode);
      const errorMessage = error.message;
      console.log("🖥️  errorMessage: ", errorMessage);
      // ..
    });
    
};
