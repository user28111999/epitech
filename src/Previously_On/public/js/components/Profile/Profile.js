import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Header/Navbar";
import Footer from "../Footer";
import MyProfile from "../Profile/MyProfile";

class Profile extends React.Component {

    constructor() {
        super();
    }

  render() {
    return (
    <div>
      <Navbar/>
      <MyProfile/>
      <Footer/>
    </div>
    );
  }
}

export default Profile;