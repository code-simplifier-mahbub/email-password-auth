import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";


const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  console.log(passwordError);
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email, password);
    updateUserName(name);

    //validate password
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide At least tow uppercase ");
      return;
    }

    if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError("Please provide at least two number");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please provide a special character");
      return;
    }
    setPasswordError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
        
      })
      .catch((error) => {
        setPasswordError(error.message)
      });
  };


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert('Please check your email to verify your email address')
    })
  }

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('display name updated')
    }).catch(error => console.log(error))
  }
  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>{passwordError}</p>

        {success && <p className="text-success">User Create Successfully </p>}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>Already have an account? Please <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default RegisterReactBootstrap;
