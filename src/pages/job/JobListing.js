import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/css/job-listing.css";
import axios from 'axios';
import { config } from "../../core/config";
import dataService from "../../shared/services/data.service";

function JobListing () {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [companyId, SetCompanyId] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('user'));
    
    if (!data?.username) {
      history.push("/login");
    }

    const id = dataService.getData();
    console.log('id', id);

    if(Object.keys(id).length === 0) history.push("/company-listing");
    else getData(id);
  },[]);

  const getData = (id) => {
    let url = `${config.API_BASE_URL}/jobs/jobsByCompany/${id}`;

    axios.get(url)
      .then(res => {
        let response = res.data;
        setData(response);
      })
  }

  const editJob = (id) => {
    console.log("editJob >", id);
  }

  const deleteJob = (id) => {
    console.log("deleteJob >", id);
  }

  const applyJob = (data) => {
    dataService.setData(data);
    history.push("/apply-job");
  }

  return (
    <div>
      <div className="job-listing">
        <div className="container">
          <div className="row">
            {
              data.length !== 0 && loading !== true ?
              data.map((item, i) => {
                return (
                  <div className="col-md-4" key={i}>
                    <div className="card">
                      <img src={item.image} />
  
                      <div className="card-body">
                        <h4>{item.position}</h4>
                        {/* <h5>{item.companyId}</h5> */}
                        {/* <p>{item.location}</p> */}
  
                        <div className="time">
                          <span href="#">
                            <i className="far fa-clock"></i> {item.jobType}
                          </span>
                          <span href="#">
                            <i className="fas fa-suitcase"></i> {item.remoteOrOnsite}
                          </span>
                        </div>
  
                        <div className="job-btn">
                          <a className="press" onClick={() => applyJob(item)} >Apply Job</a>
  
                          {/* <div className="icons">
                              <a className="far fa-edit mr-3 text-success" onClick={() => editJob(item._id)}></a>
                              <a className="fas fa-trash-alt text-danger" onClick={() => deleteJob(item._id)}></a>
                          </div> */}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                );
              })
              :
              <p>Data Not Found</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobListing;
