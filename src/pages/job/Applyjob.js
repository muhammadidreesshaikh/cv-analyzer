import React from "react";
import "../../assets/css/applyjob.css";

class Applyjob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Applyjob");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="apply-job">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12 col-md-8 col-lg-8">
                <h2>Apply Job</h2>

                <form className="pt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="name" class="form-control" placeholder="First Name" formControlName="name"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="name" class="form-control" placeholder="Last Name" formControlName="name"/>
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
                        <label>Website</label>
                        <input type="text" class="form-control" placeholder="Website" formControlName="text"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" class="form-control" placeholder="Phone Number" formControlName="number"/>
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
                        <input type="file" formControlName="text"/>
                      </div>
                    </div>

                    <div className="col-12">
                      <div class="mb-3">
                        <label class="form-label">Cover Letter</label>
                        <textarea class="form-control" placeholder="Cover Letter Here.." rows="5"></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="job-btn">
                        <a className="press">Apply Job</a>
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
export default Applyjob;
