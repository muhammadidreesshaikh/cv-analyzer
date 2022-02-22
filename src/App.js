import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';
import ForgetPassword from './pages/auth/ForgetPassword';
import CompanyListing from './pages/company/CompanyListing';
import CreateCompany from './pages/company/CreateCompany';
import SelectedCandidates from './pages/company/SelectedCandidates';
import ApplyJob from './pages/job/ApplyJob';
import CreateJob from './pages/job/CreateJob';
import JobListing from './pages/job/JobListing';
import AllCompanies from './pages/admin/AllCompanies';
import AllJobs from './pages/admin/AllJobs';
import Careers from './pages/Careers';
import OurHistory from './pages/OurHistory';
import PrivacyPolicies from './pages/PrivacyPolicies';
import TermsCondition from './pages/TermsCondition';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/services' component={Services}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/sign-up' component={SignUp}></Route>
              <Route exact path='/forget-password' component={ForgetPassword}></Route>
              <Route exact path='/company-listing' component={CompanyListing}></Route>
              <Route exact path='/create-company' component={CreateCompany}></Route>
              <Route exact path='/selected-candidates' component={SelectedCandidates}></Route>
              <Route exact path='/apply-job' component={ApplyJob}></Route>
              <Route exact path='/create-job' component={CreateJob}></Route>
              <Route exact path='/job-listing' component={JobListing}></Route>
              <Route exact path='/all-companies' component={AllCompanies}></Route>
              <Route exact path='/all-jobs' component={AllJobs}></Route>
              <Route exact path='/careers' component={Careers}></Route>
              <Route exact path='/privacy-policies' component={PrivacyPolicies}></Route>
              <Route exact path='/our-history' component={OurHistory}></Route>
              <Route exact path='/terms-condition' component={TermsCondition}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
