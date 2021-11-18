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
                                <a href="#">Cv Analyzer</a>
                            </div>
                        </div>

                        <div className="col-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/about">About</Link></li>

                                    <div className="dropdown">
                                        <button class="dropbtn">Admin</button>
                                        <div class="dropdown-content">
                                            <Link to="/allcompanies">All Companies</Link>
                                            <Link to="/alljobs">All Jobs</Link>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button class="dropbtn">Companies</button>
                                        <div class="dropdown-content">
                                            <Link to="/createcompany">Create Company</Link>
                                            <Link to="/companylisting">Company Listing</Link>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button class="dropbtn">Jobs</button>
                                        <div class="dropdown-content">
                                            <Link to="/createjob">Create Job</Link>
                                            <Link to="/applyjob">Apply Job</Link>
                                            <Link to="/joblisting">Job Listing</Link>
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