import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyProfile extends React.Component {
    constructor() {
      super();
      this.state = { users: [] };
    }

    componentDidMount() {
      UserModel.find({}).then(function(result) {
          this.setState({ users: result });
      });
    }

    render() {
      const { users } = this.state;
      if (users && users.length > 0) {
          return (
           <div>
             {
               users.map((users, index) =>(
                   <p key={index}>{users.username}</p>
               ))
             }
           </div>
          );
       }
      return <h1>Loading data..</h1>
  }
}

export default MyProfile;