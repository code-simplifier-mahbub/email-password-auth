import React from "react";
import { Link } from "react-router-dom";

const LoginBootstrap = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    }
  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="text-primary">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2" className="text-primary">Password</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
      <p >New this website? Please <Link to = '/register'>Register</Link></p>
    </div>
  );
};

export default LoginBootstrap;
