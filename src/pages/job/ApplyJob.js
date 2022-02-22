import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/css/apply-job.css";
import axios from 'axios';
import { config } from "../../core/config";
import dataService from "../../shared/services/data.service";

import Personality from "./questions/personality";
import IqQuestions from "./questions/iq";

function ApplyJob () {
  const history = useHistory();

  const [stepCount, setStepCount] = useState(1);
  const [data, setData] = useState({});
  const [personalityQuestions, setPersonalityQuestions] = useState({});
  const [iqQuestions, setIqQuestions] = useState({});
  const [loading, SetLoading] = useState(false);
  const [applyJob, SetApplyJob] = useState(false);

  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [website, SetWebsite] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [resume, SetResume] = useState('');
  const [cover, SetCover] = useState('');

  useEffect(() => {
    const jobData = dataService.getData();
    setData(jobData);
    
    if(Object.keys(jobData).length === 0) history.push("/company-listing");
  },[]);

  const onJobApply = () => {
    SetApplyJob(!applyJob);

    let formData = {
      "jobId": data._id,
      "companyId": data.companyId,
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "website": website,
      "phone": phoneNumber,
      "resumeURL": resume,
      "cover": cover
    }

    let url = `${config.API_BASE_URL}/apply-jobs`;

    axios.post(url, formData)
    .then(res => {
      SetApplyJob(!applyJob);
      history.push("/company-listing");
    })
  }

  const onResumeSelect = (event) => {
    SetResume('www.sample.com/resume');
  }

  const onNext = () => {
    let step = stepCount+1;
    setStepCount(step);
  }

  const onBack = () => {
    let step = stepCount-1;
    setStepCount(step);
  }

  const getPersonalityAnswers = (data) => {
    setPersonalityQuestions(data);

    console.log('callback > parent > PersonalityQuestions', personalityQuestions);
  }

  const getIqAnswers = (data) => {
    setIqQuestions(data);

    console.log('callback > parent > IqAnswers', iqQuestions);
  }

  return ( 
    <div>

      { stepCount == 1 ? <Personality parentPersonalityAnswers={(e) => getPersonalityAnswers(e)} /> : null }

      { stepCount == 2 ? <IqQuestions parentIqAnswers={(e) => getIqAnswers(e)} /> : null }

      { stepCount == 3 ?
        <div className="apply-job">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-12">
                  <div className="heading">
                      <h3>Apply Job</h3>
                      <div className="seprator"></div>
                  </div>
              </div>

              <div className="col-12 col-md-8 col-lg-8">
                { !applyJob && (
                  <form className="pt-5">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="name"
                            className="form-control"
                            placeholder="First Name"
                            onChange={(event) => SetFirstName(event.target.value)} 
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={(event) => SetLastName(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(event) => SetEmail(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Website</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Website"
                            onChange={(event) => SetWebsite(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone Number"
                            onChange={(event) => SetPhoneNumber(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>CV/Resume</label>
                          <input type="file" onChange={(event) => onResumeSelect(event)} />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Cover Letter</label>
                          <textarea
                            className="form-control"
                            placeholder="Cover Letter Here.."
                            rows="5"
                            onChange={(event) => SetCover(event.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                )}

                { applyJob && (
                  <div className="new-screen">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <div className="card mt-5">
                          <h3>Thankyou For Applying.</h3>
                          
                          <div className="screen-btn">
                            <Link to="/job-listing" className="press">Back To Jobs</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        :
        null
      }

      { stepCount <= 3 ?
        <div className="row mb-5">
          <div className="col-12 text-center">
              { stepCount <= 3 ? <a className="press mr-3" onClick={() => onBack()}>Back</a> : null }
              { stepCount == 3 ? <a className="press" onClick={() => onJobApply()}>Apply Job</a> : null }
              { stepCount < 3 ? <a className="press ml-3" onClick={() => onNext()}>Next</a> : null }
          </div>
        </div>
        :
        null
      }
    </div>
  );
}
export default ApplyJob;
