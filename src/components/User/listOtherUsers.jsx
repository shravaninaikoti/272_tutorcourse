import React, { Component } from "react";
import axios from "axios";

class ListOtherUsers extends Component {
  state = {
    tutorAwayUsers: [],
    freezeUsers: [],
    coffeeCultureUsers: [],
    apparelStoreUsers: [],
  };
  componentDidMount() {
    // 1) GET TUTORAWAY USERS FROM DATABASE
    let formData = new FormData();
    formData.append("userid", "");
    formData.append("name", "");
    formData.append("email", "");
    formData.append("city", "");
    formData.append("phone", "");
    console.log(formData);

    //const url = "http://localhost:3000/searchUser.php";
    //const url = "https://tutorawayphp.azurewebsites.net/searchUser.php";
    const url = "https://tutorawayphpbackend.000webhostapp.com/searchUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        //handle success
        console.log(response);

        // Actual data we want to use, in array of objects. Ex: [{},{},{}]
        console.log(response.data);

        // Set state
        this.setState({ tutorAwayUsers: response.data });
      })
      .catch(function (response) {
        //handle error
        console.log("Error: ", response);
      });
  }

  render() {
    const tutorAwayUsers = this.state.tutorAwayUsers;

    return (
      <div className="row justify-content-center">
        <div className="col-md-10">
          <br />
          <h1 className="text-center">List other website users</h1>
          <br />
          <br />
          <div class="row justify-content-around">
            <div class="col">
              <h5>Tutor Away users</h5>
              <ul class="list-group col-sm-8">
                {tutorAwayUsers.map((user) => (
                  <li class="list-group-item"> {user.name}</li>
                ))}
              </ul>
            </div>
            <div class="col">
              <h5>Freeze Users</h5>
              <ul class="list-group col-sm-8">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                {/* <ul class="list-group col-sm-8">
                {freezeUsers.map((user) => (
                  <li class="list-group-item"> {user.name}</li>
                ))}
              </ul> */}
              </ul>
            </div>
            <div class="col">
              <h5>Coffee Culture users</h5>
              {/* <ul class="list-group col-sm-8">
                {coffeeCultureUsers.map((user) => (
                  <li class="list-group-item"> {user.name}</li>
                ))}
              </ul> */}
            </div>
            <div class="col">
              <h5>Apparel Store users</h5>
              {/* <ul class="list-group col-sm-8">
                {apparelStoreUsers.map((user) => (
                  <li class="list-group-item"> {user.name}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOtherUsers;
