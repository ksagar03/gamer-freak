import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <section className=" gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
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
                  <Link className="text-white-50 fw-bold">Sign up</Link>
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
