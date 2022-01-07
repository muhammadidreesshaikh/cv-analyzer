import React from "react";
import Slider from "../shared/components/Slider";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

// image
import image1 from "../assets/img/connect1.svg";
import image2 from "../assets/img/connect2.svg";
import image3 from "../assets/img/online1.jpg";
import image4 from "../assets/img/online2.jpg";
import image5 from "../assets/img/online3.jpg";
import image6 from "../assets/img/job.svg";
import image7 from "../assets/img/gif2.gif";

function Home() {

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
        <div className="home-about">
          <div className="container">
            <div className="row">

              <div className="col-5">
                <h3>About Us</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              </div>

              <div className="col-7">
                <div className="about-inner">
                  <div className="row">

                    <div className="col-6">
                      <div className="card">
                        <i class="far fa-address-card"></i>
                        <h6>We Create Really Goood Cv's That Makes You Land The Job</h6>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="card">
                        <i class="fas fa-rocket"></i>
                        <h6>It Is Fast And Convinient To Use Our Service</h6>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="card">
                        <i class="far fa-address-book"></i>
                        <h6>We Have A Lot Nice Cv Templates</h6>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="card">
                        <i class="fas fa-heart"></i>
                        <h6>Ans Most Import Part, It Is Totally Free!</h6>
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
        <div className="online">
          <div className="container">
            <div className="row">
              
              <div className="col-12">
                <h3>Online Cv Analyzer</h3>
              </div>

              <div className="col-12">
                <div className="inner">
                  <div className="row">

                    <div className="col-4">
                      <div className="card">
                        <img src={image3}/>
                        <h6>Easy To Use</h6>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card">
                        <img src={image4}/>
                        <h6>Make CV Online</h6>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card">
                        <img src={image5}/>
                        <h6>Get Support 24/7</h6>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
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
                  <img src={image6} />
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
                      />
                    </div>

                    <div className="form-group">
                      <i class="fas fa-building"></i>{" "}
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Company"
                      />
                    </div>

                    <div className="form-group">
                      <i class="fas fa-map-marker-alt"></i>{" "}
                      <input
                        type="location"
                        class="form-control"
                        placeholder="Location"
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
                <div className="left">
                  <h1>Post your job for millions of people to see</h1>

                  <div className="post-btn mt-5">
                    <Link to="/home" className="press">Post a job</Link>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="image">
                  <img src={image7} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="question">
          <div className="container">
            <div className="row">
              
              <div className="col-6">
                <div className="left">
                  <h1>Still Have Any Question!</h1>
                </div>
              </div>

              <div className="col-6">
                <div className="post-btn">
                  <Link to="/contact" className="press">Contact Us</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
