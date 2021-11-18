import React from "react";
import "../../assets/css/createcompany.css";

class Createcompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Createcompany");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="create-company">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12 col-md-8 col-lg-8">
                <h2>Create Company</h2>

                <form className="pt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="name" class="form-control" placeholder="Full Name" formControlName="name"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Owner Name</label>
                        <input type="name" class="form-control" placeholder="Owner Name" formControlName="name"/>
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

                    <div className="col-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="address" class="form-control" placeholder="Address" formControlName="address"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" class="form-control" placeholder="Phone Number" formControlName="number"/>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" placeholder="City" formControlName="text"/>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="company-btn">
                        <a className="press">Register Company</a>
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
export default Createcompany;
