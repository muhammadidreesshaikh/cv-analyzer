import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Forgetpassword from './pages/auth/Forgetpassword';
import Companylisting from './pages/company/Companylisting';
import Createcompany from './pages/company/Createcompany';
import Applyjob from './pages/job/Applyjob';
import Createjob from './pages/job/Createjob';
import Joblisting from './pages/job/Joblisting';
import Allcompanies from './pages/admin/Allcompanies';
import Alljobs from './pages/admin/Alljobs';
import Careers from './pages/Careers';

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
              <Route exact path='/sign-up' component={Signup}></Route>
              <Route exact path='/forget-password' component={Forgetpassword}></Route>
              <Route exact path='/company-listing' component={Companylisting}></Route>
              <Route exact path='/create-company' component={Createcompany}></Route>
              <Route exact path='/apply-job' component={Applyjob}></Route>
              <Route exact path='/create-job' component={Createjob}></Route>
              <Route exact path='/job-listing' component={Joblisting}></Route>
              <Route exact path='/all-companies' component={Allcompanies}></Route>
              <Route exact path='/all-jobs' component={Alljobs}></Route>
              <Route exact path='/careers' component={Careers}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
