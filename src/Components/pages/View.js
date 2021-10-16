import React from "react";
import { Link } from "react-router-dom";

const View = () => {
  return (
    <div>
      <Link to="/">About</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default View;
