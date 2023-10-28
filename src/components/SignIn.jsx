import { IconButton } from "@mui/material";
import React from "react";
import { Link , useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate=useNavigate();
  return (
    <section className=" gradient-custom">
      <div className="container py-5 h-100" style={{minWidth:"60%", maxWidth:"80%" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <IconButton onClick={(e)=>{navigate("/")}}>
              <img  src="https://icons.iconarchive.com/icons/bokehlicia/captiva/256/games-icon.png" alt="" style={{width:"30px", height:"30px"}} />
              </IconButton>
              <div className="mb-md-5  pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter yoru login-id and password
                </p>
                <div className="form-floating  mb-3">
                  <input
                    type="email"
                    id="typeEmail"
                    className="form-control form-control-lg bg-dark text-white"
                  />
                  <label for="typeEmail">Email</label>
                </div>
                <div className="form-floating  mt-4 mb-3">
                  <input
                    type="passwrod"
                    id="typePassword"
                    className="form-control form-control-lg bg-dark text-white"
                  />
                  <label for="typePasswrod">Password</label>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <Link className="text-white-50">Forgot passwrod?</Link>
                </p>
                <button
                  className="btn btn-outline-light btn-lg px-5 mb-4"
                  type="submit"
                >
                  Login
                </button>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link className="text-white-50 fw-bold">Sig up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
