import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/signout");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <section className="register">
        <form action="">
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button onClick={signin}>Login</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
