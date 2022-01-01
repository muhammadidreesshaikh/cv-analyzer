import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/job-listing.css";
import axios from 'axios';
import { config } from "../../core/config";

function JobListing () {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    let url = `${config.API_BASE_URL}/jobs`;

    axios.get(url)
      .then(res => {
        // checking api response/data in console
        console.log(res.data);

        // getting data/response from API
        let response = res.data;

        // storing response/data into state 
        setData(response);
      })
  }

  return (
    <div>
      <div className="job-listing">
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <div className="card">
                    <img src={item.image} />

                    <div className="card-body">
                      <h4>{item.position}</h4>
                      <h5>{item.companyId}</h5>
                      {/* <p>{item.location}</p> */}

                      <div className="time">
                        <span href="#">
                          <i className="far fa-clock"></i> {item.jobType}
                        </span>
                        <span href="#">
                          <i className="fas fa-suitcase"></i> {item.remoteOrOnsite}
                        </span>
                      </div>

                      <div className="company-btn">
                        <Link to="/apply-job" className="press">
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
export default JobListing;
