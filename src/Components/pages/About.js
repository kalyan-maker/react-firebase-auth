import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { app } from "../firebase";

// const auth = getAuth(app);

const About = () => {
  const history = useHistory();
  const onSignOut = (e) => {
    e.preventDefault();

    const auth = getAuth(app);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        history.push("/signin");
        console.log(auth);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <form action="">
        <div>
          <h1>This is the home component</h1>
          <button onClick={onSignOut}>Log Out</button>
        </div>
      </form>
    </div>
  );
};

export default About;
