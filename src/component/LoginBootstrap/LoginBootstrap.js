import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    // console.log(email);
  };
  const handleForgatPassword = () => {
    sendPasswordResetEmail(auth, userEmail).then(() => {
      alert("password reset email sent. Please check your email");
    })
    .catch((error) => {
        console.error(error)
    })
  };

  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label
            
            htmlFor="formGroupExampleInput"
            className="text-primary"
            
          >
            Email
          </label>
          <input
            type="text"
            onBlur={handleEmailBlur}
            name="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2" className="text-primary">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
      <p>
        New this website? Please <Link to="/register">Register</Link>
      </p>
      <p>
        <small>
          Forget password?
          <Link onClick={handleForgatPassword}>
            Reset Password
          </Link>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
