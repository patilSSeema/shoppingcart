import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setErr("Please fill all fields");
      return;
    }
    if (values.password !== confirmPassword) {
      setErr("Password and confirmation password do not match");
      return;
    }
    setErr("");
    //console.log(values);
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErr(err.message);
        console.log("Error-", err.message);
      });
  };

  return (
    <>
      <div className="container-signup">
        <center>
          <img src="./img/siginup1.jpg" alt="login" />
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
            />
            <center>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </center>
            <b>{err}</b>
            <button
              type="submit"
              disabled={submitButtonDisable}
              onClick={handleSubmit}
            >
              SignUp
            </button>
          </form>
          <p style={{ margin: "30px" }}>
            Alredy have account?<Link to="/login">Login</Link>
          </p>
        </center>
      </div>
    </>
  );
};

export default SignUp;
