import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../assets/css/create-company.css";
import axios from 'axios';
import { config } from "../../core/config";

function Createcompany() {
  const history = useHistory();

  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    console.log('Create Company');
  }, [])

  const register = () => {
    let data = {
      companyName: companyName, 
      ownerName: ownerName, 
      email: email, 
      website: website, 
      address: address, 
      phone: phoneNumber, 
      city: city
    }
    console.log(data);

    let url = `${config.API_BASE_URL}/companies`;

    axios.post(url, data)
    .then(res => {
      console.log(res);

      // redirecting to companies listing page
      history.push("/company-listing");
    })
  }

  return (
    <div>
      <div className="create-company">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12 col-md-8 col-lg-8">
              <h2>Create Company</h2>

              <form className="pt-5">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" class="form-control" placeholder="Full Name" onChange={(event) => setCompanyName(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Owner Name</label>
                      <input type="text" class="form-control" placeholder="Owner Name" onChange={(event) => setOwnerName(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Website</label>
                      <input type="text" class="form-control" placeholder="Website" onChange={(event) => setWebsite(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" class="form-control" placeholder="Address" onChange={(event) => setAddress(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="number" class="form-control" placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" class="form-control" placeholder="City" onChange={(event) => setCity(event.target.value)} />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="company-btn">
                      <a className="press" onClick={register}>Register Company</a>
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
export default Createcompany;
