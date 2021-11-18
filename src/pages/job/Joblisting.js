import React from "react";
import "../../assets/css/joblisting.css";

class Joblisting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Joblisting");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="job-listing">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12">
                <p>job-listing</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Joblisting;
