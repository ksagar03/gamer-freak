import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [signupemail, setSignupemail]=useState("");
  // const [signuppassword, setSignuppassword]=useState("");
  const [errormsg, setErrormsg] = useState("");
  const [signupvalues, setSignupvalues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginvalues, setLoginvalues] = useState({
    email: "",
    password: "",
  });
  const [clicked, setClicked] = useState(true);
  const LogIN = (e) => {
    e.preventDefault(); // this line will prevent from reloading the page whenever we click on the btn
    if (!loginvalues.email || !loginvalues.password) {
      setErrormsg("Please enter all the fields");
      return;
    }
    setErrormsg("");
    signInWithEmailAndPassword(auth, loginvalues.email, loginvalues.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/");
      })
      .catch((error) => setErrormsg(error.message));
  };
  const signUP = (e) => {
    e.preventDefault();
    if (!signupvalues.name || !signupvalues.email || !signupvalues.password) {
      setErrormsg("Please enter all the fields");
      return;
    } else setErrormsg("");

    createUserWithEmailAndPassword(
      auth,
      signupvalues.email,
      signupvalues.password
    )
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: signupvalues.name });
        navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => setErrormsg(error.message));
  };
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-hight justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In</span>
                  <span>Sign Up</span>
                </h6>
                <input
                  type="checkbox"
                  className="checkbox"
                  id="login"
                  name="login"
                  onClick={() => setErrormsg("")} // if we move from signin page to login page or visversa error message will set to empty string
                />
                <label htmlFor="login"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              // value={email}
                              onChange={(e) =>
                                setLoginvalues((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              name="log_email"
                              className="form-style"
                              placeholder="please enter your Email"
                              id="log-email"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={clicked ? "password" : "text"}
                              // value={password}
                              onChange={(e) =>
                                setLoginvalues((prev) => ({
                                  ...prev,
                                  password: e.target.value,
                                }))
                              }
                              name="log_password"
                              className="form-style"
                              placeholder="Your Password"
                              id="log_password"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                            <div
                              className="pwdvisibility"
                              onClick={() => {
                                setClicked(!clicked);
                              }}
                            >
                              {clicked ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </div>
                          </div>
                          <p className="mt-4" style={{ color: "red" }}>
                            {errormsg}
                          </p>
                          <button
                            onClick={LogIN}
                            className="btn btn-outline-warning mt-2"
                          >
                            Submit
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="/" className="link">
                              forget your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              // value={username}
                              onChange={(e) =>
                                setSignupvalues((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              name="signup_name"
                              className="form-style"
                              placeholder="your full Name"
                              id="signup_name"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              // value={signupemail}
                              onChange={(e) =>
                                setSignupvalues((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              name="signup_email"
                              className="form-style"
                              placeholder="Your Email"
                              id="signup_email"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={clicked ? "password" : "text"}
                              // value={signuppassword}
                              onChange={(e) =>
                                setSignupvalues((prev) => ({
                                  ...prev,
                                  password: e.target.value,
                                }))
                              }
                              name="signup_password"
                              className="form-style"
                              placeholder="Your Password"
                              id="signup_password"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                            <div
                              className="pwdvisibility"
                              onClick={() => {
                                setClicked(!clicked);
                              }}
                            >
                              {clicked ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </div>
                          </div>
                          <p className="mt-4" style={{ color: "red" }}>
                            {errormsg}
                          </p>
                          <button
                            onClick={signUP}
                            className="btn btn-outline-warning mt-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
