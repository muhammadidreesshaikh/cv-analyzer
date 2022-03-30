import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/css/sign-up.css";
import axios from 'axios';
import { config } from "../../core/config";

function Signup() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const register = () => {
    let url = `${config.API_BASE_URL}/users/signup`;

    let data = {
      username: username,
      password: password,
      role: role
    }

    console.log(data);

    axios.post(url, data)
      .then(res => {
        alert('Account Successfully Created.')
        history.push("/login");
      },
      (error) => {
        alert(error.message);
      })
  }

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

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="radios" value="user" checked onChange={(event) => setRole(event.target.value)}/>
                    <label class="form-check-label">Join as a user</label>
                  </div>
                  <div class="form-check pt-2">
                    <input class="form-check-input" type="radio" name="radios" value="company" onChange={(event) => setRole(event.target.value)} />
                    <label class="form-check-label">Join as a company</label>
                  </div>

                  <div className="signup-btn mt-5">
                    <a className="press d-block" onClick={register}>Join Now</a>
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
