import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/job-listing.css";

// image
import image from "../../assets/img/job.png";
import image1 from "../../assets/img/job1.jpg";
import image2 from "../../assets/img/job2.jpg";
import image3 from "../../assets/img/job3.jpg";
import image4 from "../../assets/img/job4.jpg";
import image5 from "../../assets/img/job5.jpg";

// arary
let Data = [
  {
    id: "1",
    image: image,
    position: "Front-End Developer",
    company: "Tech Soltution",
    location: "Karachi, Pakistan",
    time: "1 week",
    role: "Full Time",
  },
  {
    id: "2",
    image: image1,
    position: "Node.js Developer",
    company: "Nature Tech",
    location: "Karachi, Pakistan",
    time: "3 days ago",
    role: "Remote",
  },
  {
    id: "3",
    image: image2,
    position: "Python Developer",
    company: "Contour Software House",
    location: "Karachi, Pakistan",
    time: "1 month",
    role: "Full Time",
  },
  {
    id: "4",
    image: image3,
    position: "Ionic Developer",
    company: "Xpert Soltution ",
    location: "Karachi, Pakistan",
    time: "5 days ago",
    role: "Part Time",
  },
  {
    id: "5",
    image: image4,
    position: "JavaScript Developer",
    company: "Aim Soltution",
    location: "Karachi, Pakistan",
    time: "2 week",
    role: "Remote",
  },
  {
    id: "6",
    image: image5,
    position: "React.js Developer",
    company: "Contour Soltution",
    location: "Karachi, Pakistan",
    time: "18 days ago",
    role: "Part Time",
  },
];

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
            <div className="row">
              {Data.map((item, i) => {
                return (
                  <div className="col-md-4" key={i}>
                    <div className="card">
                      <img src={item.image} />

                      <div className="card-body">
                        <h4>{item.position}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.location}</p>

                        <div className="time">
                          <span href="#">
                            <i class="far fa-clock"></i> {item.time}
                          </span>
                          <span href="#">
                            <i class="fas fa-suitcase"></i> {item.role}
                          </span>
                        </div>

                        <div className="company-btn">
                          <Link to="/applyjob" className="press">
                            Apply Job
                          </Link>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Joblisting;
