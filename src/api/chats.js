import { db } from "../db/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const fetchAllChats = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "chats"));
  
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  });
  return data;
};

