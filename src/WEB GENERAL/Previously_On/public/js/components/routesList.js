import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About/About';
import AffichageSerieSingle from './Single/AffichageSerieSingle';
import SignupLogin from "./SignupLogin/SignupLogin";
import Profile from "./Profile/Profile";
import Nuts from "./Nuts/Nuts";
import Logout from "./SignupLogin/Logout";



class RoutesList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/mylist" component={Nuts} />
        <Route path="/Profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/affichageseriesingle" component={AffichageSerieSingle}/>
        <Route path="/signuplogin" component={SignupLogin}/>
        <Route path="/logout" component={Logout}/>
      </div>
    );
  }
}

export default RoutesList;