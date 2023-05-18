import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("isAdmin");

    window.location = "/TutorAway-React-PHP-app";
  }
  render() {
    return null;
  }
}

export default Logout;
