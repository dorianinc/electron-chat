import { db } from "../db/firestore";
import { collection, getDocs } from "firebase/firestore";

export const fetchAllChats = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "chats"));
  
  querySnapshot.forEach((doc) => {
    const chatData = doc.data();
    chatData.id = doc.id;
    data.push(chatData)
  });
  return data;
};

