import React from "react";
import "../css/login.css"
const Login = () => {
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
                              name="log_email"
                              className="form-style"
                              placeholder="please enter your Email"
                              id="log-email"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="log_password"
                            className="form-style"
                            placeholder="Your Password"
                            id="log_password"
                            autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt">
                            </i>
                          </div>
                          <a href="/" className="btn btn-outline-warning mt-4">Submit</a>
                          <p className="mb-0 mt-4 text-center"><a href="/" className="link">forget your password</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                        <div className="center-wrap">
                            <div className="section text-center">
                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                <div className="form-group">
                                    <input type="text"
                                    name="signup_name"
                                    className="form-style" placeholder="your full Name"
                                    id="signup_name"
                                    autoComplete="off" />
                                    <i className="input-icon uil uil-user"></i>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="email"
                                    name="signup_email"
                                    className="form-style" placeholder="Your Email"
                                    id="signup_email"
                                    autoComplete="off" />
                                    <i className="input-icon uil uil-at"></i>  
                                </div>
                                <div className="form-group mt-2">
                                    <input type="password"
                                    name="signup_password"
                                    className="form-style" placeholder="Your Password"
                                    id="signup_password"
                                    autoComplete="off" />
                                    <i className="input-icon uil uil-lock-alt"></i>  
                                </div>
                                <a href="/1" className="btn btn-outline-warning mt-4">Submit</a>
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
