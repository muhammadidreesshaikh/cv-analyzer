import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/apply-job.css";

function ApplyJob () {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [applyJob, SetApplyJob] = useState(false);

  useEffect(() => {
    console.log('ApplyJob');
  },[]);

  const onJobApply = () => {
    SetApplyJob(!applyJob);
  }

  return ( 
    <div>
      <div className="apply-job">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12">
                <div className="heading">
                    <h3>Apply Job</h3>
                    <div className="seprator"></div>
                </div>
            </div>

            <div className="col-12 col-md-8 col-lg-8">
              { !applyJob && (
                <form className="pt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="name"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="name"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Website</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Website"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <label>Position</label>
                      <form>
                        <select>
                          <option>Front-End Developer</option>
                          <option>Node.js Developer</option>
                          <option>Python Developer</option>
                          <option>Ionic Developer</option>
                          <option>JavaScript Developer</option>
                          <option>React.js Developer</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>CV/Resume</label>
                        <input type="file" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div class="mb-3">
                        <label class="form-label">Cover Letter</label>
                        <textarea
                          class="form-control"
                          placeholder="Cover Letter Here.."
                          rows="5"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="job-btn">
                        <a className="press" onClick={() => onJobApply()}>
                          Apply Job
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              { applyJob && (
                <div className="new-screen">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <div className="card mt-5">
                        <h3>Thankyou For Applying.</h3>
                        
                        <div className="screen-btn">
                          <Link to="/job-listing" className="press">Back To Jobs</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApplyJob;
