import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Login");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-4">
                <div className="card">
                  <h2>Login</h2>

                  <form className="pt-5">
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

                    <div className="row forgot-checkout pt-2">
                      <div className="col-6">
                        <div className="form-group checkout form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                          />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="forgot-btn">
                          <Link to="/forget-password">Forgot Password?</Link>
                        </div>
                      </div>
                    </div>

                    <div className="login-btn">
                      <a className="press d-block mt-3">Login</a>
                    </div>
                  </form>

                  <div className="new-account">
                    <span>Don't have an Account?</span>
                    <Link to="/sign-up"> Join now. </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
