import React from 'react';
import '../assets/css/contact.css';

// image
import image from "../assets/img/contactus.gif";

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Contact");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <div className="contact">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12">
                                <div className="heading">
                                    <h3>Contact Us</h3>
                                    <div className="seprator"></div>
                                </div>
                            </div>

                            <div className="col-9">
                                <div className="main">
                                    <form>
                                        <div className="row">
                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>First Name</label>
                                                    <input type="name" class="form-control" placeholder="First Name"/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>Last Name</label>
                                                    <input type="name" class="form-control" placeholder="Last Name"/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" class="form-control" placeholder="Your Email"/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>Subject</label>
                                                    <input type="text" class="form-control" placeholder="Subject"/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>Addess</label>
                                                    <input type="text" class="form-control" placeholder="Addess"/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div class="form-group">
                                                    <label>Contact</label>
                                                    <input type="number" class="form-control" placeholder="Contact"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div class="form-group">
                                                    <label>Message</label>
                                                    <textarea class="form-control" rows="5" placeholder='Message..'></textarea>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className='contact-btn'>
                                                    <button type="submit" class="press">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;