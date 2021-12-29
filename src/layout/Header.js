import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'

// import logo from '../assets/img/logo_465x320.png'

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                {/* <img src={logo} /> */}
                                <Link to="/home">Cv Analyzer</Link>
                            </div>
                        </div>

                        <div className="col-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/about">About</Link></li>

                                    <div className="dropdown">
                                        <button className="dropbtn">Admin</button>
                                        <div className="dropdown-content">
                                            <Link to="/all-companies">All Companies</Link>
                                            <Link to="/all-jobs">All Jobs</Link>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button className="dropbtn">Companies</button>
                                        <div className="dropdown-content">
                                            <Link to="/create-company">Create Company</Link>
                                            <Link to="/company-listing">Company Listing</Link>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button className="dropbtn">Jobs</button>
                                        <div className="dropdown-content">
                                            <Link to="/create-job">Create Job</Link>
                                            <Link to="/apply-job">Apply Job</Link>
                                            <Link to="/job-listing">Job Listing</Link>
                                        </div>
                                    </div>

                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;