import React from "react";

import Navbar from "./Navbar";

class Banner extends React.Component {
  render() {
    return (
      <div id="header-banner" className="demo-1">
        <div className="banner-content text-center">
          <div className="banner-info">
          
          </div>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <Navbar />
        <Banner />
      </header>
    );
  }
}

export default Header;
