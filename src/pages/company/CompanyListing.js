import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import "../../assets/css/company-listing.css";
import { config } from "../../core/config";
import dataService from "../../shared/services/data.service";

function CompanyListing() {
  const history = useHistory();

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

  const getJobListing = (companyId) => {
    dataService.setData(companyId);
    console.log(companyId);
    history.push("/job-listing");
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
                        <p className="text-truncate">{item.address}, {item.city}</p>
                        <div className="company-btn">
                          <a className="press" onClick={() => getJobListing(item._id)}>View All Jobs</a>
                          <Link className="press ml-2" to="/selected-candidates">Candidates</Link>

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
