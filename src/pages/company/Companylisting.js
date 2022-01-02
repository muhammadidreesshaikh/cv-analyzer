import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../assets/css/company-listing.css";
import { config } from "../../core/config";

function CompanyListing() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    let url = `${config.API_BASE_URL}/companies`;

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
        <div className="company-listing">
          <div className="container">
            <div className="row">

              {data.map((item, i) => {
                return (

                  <div className="col-4" key={i}>
                    <div className="card">
                      <img src={item.image} />

                      <div className="card-body">
                        <h5>{item.companyName}</h5>
                        <p>{item.address}, {item.city}</p>
                        <div className="company-btn">
                          <Link to="/job-listing" className="press">View All Jobs</Link>

                          <div className="icons">
                            <a href="/create-company" className="far fa-edit mr-3 text-success"></a>
                            <a className="fas fa-trash-alt text-danger"></a>
                          </div>
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
export default CompanyListing;
