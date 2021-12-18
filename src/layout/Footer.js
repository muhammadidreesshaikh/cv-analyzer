import React from 'react';
import '../assets/css/footer.css';

function Footer() {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-6">
                            <div className="first">
                                <h3>Cv Analyzer</h3>
                                <p className="pt-2">Established too long ago that a reader will be distracted by a site's text content while looking at its design. The point of using that has a less normal distribution of the letters contrary to using texts such as.</p>

                                <div className="pt-4">
                                    <a className="press" href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="first">
                                <h3>COMPANY</h3>
                                <ul>
                                    <li><a href="#">Our History</a></li>
                                    <li><a href="/careers">Careers</a></li>
                                    <li><a href="#">Our Policies</a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                </ul>
                            </div>
                        </div> 

                        <div className="col-3">
                            <div className="first">
                                <h3>STAY CONNECTED</h3>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Linkedin</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="seprator"></div>

                        <div className="col-12">
                            <div className="last">
                                <p>© Copyright 2021, Cv Analyzer. All Rights Reserved.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;