import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function register({ email, password }) {
  console.log("🖥️  email, password :: ", email, password);

  try {
    const auth = getAuth();
    console.log("🖥️  auth : ", auth);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("🖥️  userCredential: ", userCredential);

    const user = userCredential.user;
    console.log("🖥️  user : ", user);

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("🖥️  errorCode: ", errorCode);
    console.log("🖥️  errorMessage: ", errorMessage);
    throw error;
  }
}

// Usage example
register({ email: "test1@example.com", password: "testpassword" })
  .then(user => console.log("🖥️  Registered user: ", user))
  .catch(error => console.error("🖥️  Registration error: ", error));
