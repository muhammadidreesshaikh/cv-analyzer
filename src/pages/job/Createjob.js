import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../assets/css/create-job.css";
import axios from 'axios';
import { config } from "../../core/config";

function CreateJob() {
  const history = useHistory();

  const [image, setImage] = useState('https://www.av.se/Static/images/placeholder.png');
  const [companyId, setcompanyId] = useState('');
  const [email, setemail] = useState('');
  const [position, setposition] = useState('');
  const [remoteOrOnsite, setremoteOrOnsite] = useState('');
  const [jobType, setjobType] = useState('');
  const [skills, setskills] = useState('');
  const [requirements, setrequirements] = useState('');

  useEffect(() =>{
    console.log('Create Job');
  }, [])

  const create = () => {
    let data = {
      image: image, 
      companyId: companyId, 
      email: email,
      position: position,
      remoteOrOnsite: remoteOrOnsite,
      jobType: jobType,
      skills: skills,
      requirements: requirements,
    }
    console.log(data);

    let url = `${config.API_BASE_URL}/jobs`;

    axios.post(url, data)
    .then(res => {
      console.log(res);

      // redirecting to companies listing page
      history.push("/job-listing");
    })
  }
  
  
  return (
    <div>
      <div className="create-job">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12">
                <div className="heading">
                    <h3>Create Job</h3>
                    <div className="seprator"></div>
                </div>
            </div>

            <div className="col-12 col-md-8 col-lg-8">
              {/* <h2>Create Job</h2> */}

              <div className="col-12">
                <div className="image">
                  <img src={image} />
                </div>
              </div>

              <form className="pt-5">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" className="form-control" placeholder="Company Name" onChange={(event) => setcompanyId(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Company Image</label>
                      <input type="text" className="form-control" placeholder="Image URL" onChange={(event) => setImage(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Email" onChange={(event) => setemail(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Position</label>
                      <input type="text" className="form-control" placeholder="Position" onChange={(event) => setposition(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <label>On-site/Remote</label>
                    <form>
                      <select onChange={(event) => setremoteOrOnsite(event.target.value)}>
                        <option>On-site</option>
                        <option>Remote</option>
                        <option>Hybird</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-6">
                    <label>Job Type</label>
                    <form>
                      <select onChange={(event) => setjobType(event.target.value)}>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label class="form-label pt-3">Skills</label>
                      <textarea class="form-control" placeholder="Skills.." rows="5" onChange={(event) => setskills(event.target.value)}></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Requirements</label>
                      <textarea className="form-control" placeholder="Requirements.." rows="5" onChange={(event) => setrequirements(event.target.value)}></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="job-btn">
                      <a className="press" onClick={create}>Create Job</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateJob;
