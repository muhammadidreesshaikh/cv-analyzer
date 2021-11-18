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

                <div className="col-12">
                  <p>company-listing</p>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Companylisting;
