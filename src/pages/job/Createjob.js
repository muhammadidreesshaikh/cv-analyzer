import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/createjob.css";

class Createjob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Createjob");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="create-job">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12 col-md-8 col-lg-8">
                <h2>Create Job</h2>

                <form className="pt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="name" class="form-control" placeholder="Company Name" formControlName="name"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email" formControlName="email"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Position</label>
                        <input type="text" class="form-control" placeholder="Position" formControlName="text"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <label>On-site/Remote</label>
                      <form>
                        <select>
                          <option>On-site</option>
                          <option>Remote</option>
                          <option>Hybird</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-6">
                      <label>Job Type</label>
                      <form>
                        <select>
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Contract</option>
                          <option>Internship</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-12">
                      <div class="mb-3">
                        <label class="form-label pt-3">Skills</label>
                        <textarea class="form-control" placeholder="Skills.." rows="5"></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div class="mb-3">
                        <label class="form-label">Requirements</label>
                        <textarea class="form-control" placeholder="Requirements.." rows="5"></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="job-btn">
                        <a className="press">Create Job</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Createjob;
