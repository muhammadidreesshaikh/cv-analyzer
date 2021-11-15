import React from "react";
import "../../assets/css/companylisting.css";

class Companylisting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Companylisting");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="company-listing">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12 col-md-8 col-lg-4">

                <h2>Sign Up</h2>

                <form className="pt-5">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="name" class="form-control" placeholder="Full Name" formControlName="name"/>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Email" formControlName="email"/>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" formControlName="password"/>
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Confirm Password" formControlName="password"/>
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
export default Companylisting;
