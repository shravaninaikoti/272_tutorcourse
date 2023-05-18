import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {};
  handleSubmit = async (e) => {
    e.preventDefault();

    // Creating user object from form inputs
    const user = {
      userid: e.target.userid.value,
      password: e.target.password.value,
    };

    console.log(user);

    // Need create form data object for php to receive in code friendly format
    let formData = new FormData();
    formData.append("userid", user.userid);
    formData.append("password", user.password);

    console.log("formdata:", formData);

    //const url = "https://contacts--php.herokuapp.com/authenticate.php";
    //const url = "https://tutorawayphp.azurewebsites.net/authenticate.php";
    const url =
      "https://tutorawayphpbackend.000webhostapp.com/authenticate.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);

        localStorage.setItem("isAdmin", response.data);

        window.location = "/TutorAway-React-PHP-app";
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-3">
          <br />
          <h1 className="text-center">Login</h1>
          <br />
          <div class="card">
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                  <label for="userid" class="form-label">
                    User ID
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userid"
                    placeholder="Enter User ID"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
