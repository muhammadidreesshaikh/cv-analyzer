import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/slider.css";

import image from "../assets/img/slider-img1.jpg";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Slider");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="slider">
          <div className="container">
            <div className="row">

                <div className="col-6">
                    <div className="heading">
                        <h1>Welcome to your professional community</h1>

                        <div className="slider-btn mt-5">
                          <Link to="/apply-job" className="press">Apply Now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="image">
                        <img src={image}/>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
