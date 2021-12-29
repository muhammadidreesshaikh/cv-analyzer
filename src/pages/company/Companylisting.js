import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/company-listing.css";

// image
import image from "../../assets/img/company.jpg";
import image1 from "../../assets/img/company1.jpg";
import image2 from "../../assets/img/company2.jpg";
import image3 from "../../assets/img/company3.jpg";
import image4 from "../../assets/img/company4.jpg";
import image5 from "../../assets/img/company5.jpg";

// arary
let Data = [
  {
    id: "1",
    image: image,
    name: "Tech Soltution",
    location: "Karachi, Pakistan",
  },
  {
    id: "2",
    image: image1,
    name: "Nature Tech",
    location: "Karachi, Pakistan",
  },
  {
    id: "3",
    image: image2,
    name: "Contour Software House",
    location: "Karachi, Pakistan",
  },
  {
    id: "4",
    image: image3,
    name: "Xpert Soltution ",
    location: "Karachi, Pakistan",
  },
  {
    id: "5",
    image: image4,
    name: "Aim Soltution",
    location: "Karachi, Pakistan",
  },
  {
    id: "6",
    image: image5,
    name: "Makeen Software House",
    location: "Karachi, Pakistan",
  }
];

function Companylisting() {

  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    let respose = [
      {
        id: "1",
        image: image,
        name: "Tech Soltution",
        location: "Karachi, Pakistan",
      },
      {
        id: "2",
        image: image1,
        name: "Nature Tech",
        location: "Karachi, Pakistan",
      },
      {
        id: "3",
        image: image2,
        name: "Contour Software House",
        location: "Karachi, Pakistan",
      },
    ]

    setData(respose);
  }

    return (
      <div>
        <div className="company-listing">
          <div className="container">
            <div className="row">

              {data.map((item, i) => {
                return (

                  <div className="col-4" key={i}>
                    <div className="card">
                      <img src={item.image} />

                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p>{item.location}</p>
                        <div className="company-btn">
                          <Link to="/job-listing" className="press">View All Jobs</Link>
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
export default Companylisting;
