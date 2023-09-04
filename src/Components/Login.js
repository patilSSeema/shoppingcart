import React, { useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (!values.email || !values.password) {
      setErr("Please fill all fields");
      return;
    }
    setErr("");
    //console.log(values);
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErr(err.message);
        console.log("Error-", err.message);
      });
  };

  return (
    <div className="container-Login">
      <center>
        <img src="./img/Login.jpeg" alt="login" />
        <form className="login-form" onSubmit={handleSubmit}>
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
          <center>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
              required
            />
          </center>
          <b>{err}</b>
          <button
            disabled={submitButtonDisable}
            onClick={handleSubmit}
            type="submit"
          >
            Login
          </button>
        </form>
        <p style={{ margin: "30px" }}>
          Dont't have account?<Link to="/signup">SignUp</Link>
        </p>
      </center>
    </div>
  );
};

export default Login;
