import React from "react";
import "../../assets/css/forget-password.css";

function ForgetPassword() {

  return (
    <div>
      <div className="forget-password">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-4">
              <div className="card">
                <h2>Forget Password</h2>

                <form className="pt-5">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="forget-btn">
                    <a className="press d-block mt-4">Send</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
