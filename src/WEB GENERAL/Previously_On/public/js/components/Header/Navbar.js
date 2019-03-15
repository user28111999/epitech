import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.linkOnclick = this.linkOnclick.bind(this);

    this.state = {
      activeLink: "HOME"
    };
  }

  linkOnclick(e) {
    this.props.linkOnclick(e.target.textContent.toLowerCase());
    var value = e.target.textContent;
    this.setState({ activeLink: value });
  }

  render() {
    if (this.props.isLogged != undefined && this.props.isLogged != null && this.props.isLogged != "") {
    var linksNames = ["HOME", "MY LIST", "ABOUT", "PROFILE", "LOGOUT"];
    } else {
      var linksNames = ["HOME", "ABOUT", "LOGIN"];
    }
    var linksNavbar = [];
    var linkNavbar;
    var classes;

    for (var i = 0; i < linksNames.length; i++) {
      var isActive;
      this.props.activeLink.activeLink === undefined ? (isActive = this.props.activeLink):(isActive = this.props.activeLink.activeLink);
      if (isActive === linksNames[i].toLowerCase()) {
        classes = "link active";
      } else {
        classes = "link";
      }
      
      if (linksNames[i] === "HOME"){
        linkNavbar = (
          <li className={classes} onClick={this.linkOnclick} key={i}>
            <Link to="/">{linksNames[i]}</Link>
          </li>
        );
      } 
      
      else if (linksNames[i] === "MY LIST"){
        linkNavbar = (
          <li className={classes} onClick={this.linkOnclick} key={i}>
            <Link to="/mylist">{linksNames[i]}</Link>
          </li>
        );
      } 

      else if (linksNames[i] === "LOGIN"){
        linkNavbar = (
          <li className={classes} onClick={this.linkOnclick} key={i}>
            <Link to="/signuplogin">{linksNames[i]}</Link>
          </li>
        );
      } 

      else {
        linkNavbar = (
          <li className={classes} onClick={this.linkOnclick} key={i}>
            <Link to={linksNames[i].toLowerCase()}>{linksNames[i]}</Link>
          </li>
        );
      }
      linksNavbar.push(linkNavbar);
    }
    
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              <img src="./images/mtl_00000.png" />
            </Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav menu-home">
              {linksNavbar}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    linkOnclick: function(value) {
      dispatch({ type: "link", activeLink: value });
    }
  };
}

function mapStateToProps(state) {
  return { activeLink: state.activeLink, isLogged: state.currentUser };
}

var NavbarRedux = connect(mapStateToProps, mapDispatchToProps)(Navbar);


export default NavbarRedux;
