import React from "react";
import "../assets/css/careers.css";

// image
import image from "../assets/img/logo.jpg";

// arary
let Data = [
  {
    id: "1",
    image: image,
    name: "Fronted Developer",
    company: "Cv Analyzer",
    location: "Karachi, Pakistan",
    time: "4 hours ago",
  },
  {
    id: "2",
    image: image,
    name: "Events Project Manager",
    company: "Cv Analyzer",
    location: "Lahore, Pakistan",
    time: "5 days ago",
  },
  {
    id: "3",
    image: image,
    name: "Data Science Manager",
    company: "Cv Analyzer",
    location: "Karachi, Pakistan",
    time: "8 hours ago",
  },
  {
    id: "4",
    image: image,
    name: "Backend Developer",
    company: "Cv Analyzer",
    location: "Multan, Pakistan",
    time: "1 week ago",
  },
  {
    id: "5",
    image: image,
    name: "Project Manager",
    company: "Cv Analyzer",
    location: "Islamabad, Pakistan",
    time: "1 hours ago",
  },
  {
    id: "6",
    image: image,
    name: "UI / UX Designer",
    company: "Cv Analyzer",
    location: "Lahore, Pakistan",
    time: "3 days ago",
  },
  {
    id: "7",
    image: image,
    name: "Sales Development Representative",
    company: "Cv Analyzer",
    location: "Karachi, Pakistan",
    time: "4 hours ago",
  },
  {
    id: "8",
    image: image,
    name: "Support Consultant",
    company: "Cv Analyzer",
    location: "Multan, Pakistan",
    time: "2 week ago",
  }
];

class Careers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Careers");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="careers">
            <div className="container">
                <div className="row">
                    
                    <div className="col-12">
                        <div className="heading">
                        <h3>Careers</h3>
                        <div className="seprator"></div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="main">
                            <div className="row">

                                {Data.map((item, i) => {
                                    return (
                                        <div className="col-6" key={i}>
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={item.image} />
                                                    </div>

                                                    <div className="col-10">
                                                        <h4>{item.name}</h4>
                                                        <h6>{item.company}</h6>
                                                        <p>{item.location}</p>
                                                        <small>{item.time}</small>
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
            </div>
        </div>
      </div>
    );
  }
}
export default Careers;
