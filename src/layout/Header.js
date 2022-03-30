import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/header.css'

// import logo from '../assets/img/logo_465x320.png'

function Header() {
    const history = useHistory();

    const [data, setData] = useState('');

    useEffect(() => {
        getLoginData();
    },[]);

    const getLoginData = () => {
        let data = JSON.parse(localStorage.getItem('user'));
        setData(data);

        console.log(data);
    }

    const logout = () => {
        localStorage.clear('user');
        setData('');
    }

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

                                    {
                                        data?.username ?
                                        <div>
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
                                                    <Link to="/company-listing">Apply Job</Link>
                                                    <Link to="/company-listing">Job Listing</Link>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }

                                    <li><Link to="/contact">Contact</Link></li>

                                    {
                                        data?.username ? <li><Link onClick={logout}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                                    }
                                    
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