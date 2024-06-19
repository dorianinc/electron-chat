import { db } from "../db/firestore";
import { doc, getDoc } from "firebase/firestore";

export const fetchChats = async () => {
  console.log("--- fetching chats ---");
  console.log("🖥️  db: ", db);
  const docRef = doc(db, "chats", "mR74JuKuqLsUMAo477o6");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

// mR74JuKuqLsUMAo477o6
