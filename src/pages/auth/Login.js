import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/css/login.css";
import axios from 'axios';
import { config } from "../../core/config";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const login = () => {
    let url = `${config.API_BASE_URL}/auth/login`;

    let data = {
      username: username,
      password: password
    }

    axios.post(url, data)
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token);

        let data = JSON.parse(res.config.data);
        localStorage.setItem('user', data.username);

        history.push("/company-listing");
      },
      (error) => {
        alert(error.message);
      })
  }

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
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
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
                    <a className="press d-block mt-3" onClick={login}>Login</a>
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
export default Login;
