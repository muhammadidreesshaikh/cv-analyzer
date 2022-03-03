import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/sign-up.css";

function Signup() {

  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-4">
              <div className="card">
                <h2>Sign Up</h2>

                <form className="pt-5">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="name"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div class="form-check pt-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">Join as a company</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">Join as a user</label>
                  </div>

                  <div className="signup-btn mt-5">
                    <a className="press d-block">Join Now</a>
                  </div>
                </form>

                <div className="new-account mt-4">
                  <span>Already have an Account?</span>
                  <Link to="/login"> Sign in. </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
