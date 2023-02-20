import React from "react";

const SignIn = () => {
  return (
    <section className="gradient-custom">
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
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="typeEmailX">
                    Email
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
