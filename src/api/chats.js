import { db } from "../db/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const fetchChats = async () => {
  console.log("--- fetching chats ---");
  const querySnapshot = await getDocs(collection(db, "chats"));
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

