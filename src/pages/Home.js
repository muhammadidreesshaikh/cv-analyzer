import React from "react";
import Slider from "../shared/Slider";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

// image
import image1 from "../assets/img/connect1.svg";
import image2 from "../assets/img/connect2.svg";
import image3 from "../assets/img/gif3.gif";
import image4 from "../assets/img/job.svg";

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
                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <a href="#">
                        Search for a job <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <a href="#">
                        Find a person you know{" "}
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <a href="#">
                        Learn a new skill <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="connect">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={image1} />
                      <h4>Connect with people who can help</h4>

                      <div className="slider-btn mt-5">
                        <Link to="/home" className="press">
                          Find people you know
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <div className="card-body">
                      <img src={image2} />
                      <h4>Learn the skills you need to succeed</h4>

                      <div className="slider-btn mt-5">
                        <Link to="/home" className="press">
                          Choose a topic to learn about
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="find">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="inner">
                    <h3>Find the right job for you</h3>
                  </div>
                </div>

                <div className="col-8">
                  <div className="chip">
                    <div className="row">
                      <a href="#">Engineering</a>
                      <a href="#">Business Development</a>
                      <a href="#">Information Technology</a>
                      <a href="#">Administrative Assistant</a>
                      <a href="#">Customer Service</a>
                      <a href="#">Finance</a>
                      <a href="#">Human Resources</a>
                      <a href="#">Marketing</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="job-hiring">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="image">
                    <img src={image4} />
                  </div>
                </div>

                <div className="col-5">
                  <div className="inner">
                    <h4>Millions of jobs and people hiring</h4>

                    <form className="pt-5">
                      <div className="form-group">
                        <i class="fas fa-search"></i>{" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Seacrh job titles"
                          formControlName="text"
                        />
                      </div>

                      <div className="form-group">
                        <i class="fas fa-building"></i>{" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Company"
                          formControlName="text"
                        />
                      </div>

                      <div className="form-group">
                        <i class="fas fa-map-marker-alt"></i>{" "}
                        <input
                          type="location"
                          class="form-control"
                          placeholder="Location"
                          formControlName="location"
                        />
                      </div>
                    </form>

                    <div className="post-btn mt-5">
                      <Link to="/joblisting" className="press">
                        Search Job
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="recommended">
            <div className="container">
              <div className="row">
                
                <div className="col-12">
                  <h3>Recommended Topics</h3>
                </div>

                <div className="col-12">
                  <div className="inner">
                    <div className="row">

                      <div className="col-4">
                        <div className="card">
                          <i class="far fa-lightbulb"></i>
                          <h6>Basics</h6>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card">
                          <i class="fas fa-shield-alt"></i>
                          <h6>Data and Privacy</h6>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card">
                          <i class="far fa-building"></i>
                          <h6>Search Company</h6>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card">
                          <i class="fas fa-briefcase"></i>
                          <h6>Search Jobs</h6>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card">
                          <i class="fas fa-user-plus"></i>
                          <h6>Connections</h6>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card">
                          <i class="fas fa-user"></i>
                          <h6>Your Profile</h6>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="post">
            <div className="container">
              <div className="row">
                
                <div className="col-6">
                  <div className="image">
                    <img src={image3} />
                  </div>
                </div>

                <div className="col-6">
                  <div className="right">
                    <h1>Post your job for millions of people to see</h1>

                    <div className="post-btn mt-5">
                      <Link to="/home" className="press">
                        Post a job
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
