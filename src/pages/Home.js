import React from "react";
import Slider from "../shared/Slider";
import "../assets/css/home.css";
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Home");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <Slider />
        <section>
          <div className="selects">
            <div className="container">
              <div className="row">
                  <p>home home home</p>
                {/* <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <a href="#">Home</a>
                        </div>
                    </div>
                </div> */}

              </div>
            </div>
          </div>

          {/* <Link to="/contact">View All Deals</Link> */}
        </section>
      </div>
    );
  }
}
export default Home;
