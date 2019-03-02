import React from "react";

import Navbar from '../Header/Navbar';
import AboutTheTeam from './AboutTheTeam';
import AboutFacts from './AboutFacts';
import Footer from '../Footer'



class AboutBanner extends React.Component {
  render() {
    return (
      <div id="header-banner" className="about">
        <div className="banner-content text-center">
          <div className="banner-info">

          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header>
          <Navbar />
          <AboutBanner />
        </header>

        <div id="page-content" className="container">

          <AboutTheTeam/>

          <AboutFacts/>

        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
