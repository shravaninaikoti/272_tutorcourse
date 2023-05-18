import React, { Component } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

import WriteReview from "../writeReview";

class PythonCourse extends Component {
  state = {
    userId: 1,
    userName: "Sushmitha",
    prodId: 6,
    prodName: "Python Tutorial for Beginers",
    reviewsFromDb: {},
  };

  componentDidMount() {
    //const url = "https://contacts--php.herokuapp.com/"; // For production
    //const url = "http://localhost:3000/index.php";
    //const url = "https://tutorawayphp.azurewebsites.net/";
    let formData = new FormData();
    formData.append("prodId", this.state.prodId);

    const url =
      "https://tutorawayphpbackend.000webhostapp.com/getProductReviews.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        //handle success
        console.log(response);
        console.log("Data:", response.data);
        this.setState({ reviewsFromDb: response.data });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  handleSubmit = async (userReview, userRating) => {
    console.log(userReview);
    console.log(userRating);

    const review = {
      prodId: this.state.prodId,
      prodName: this.state.prodName,
      userId: this.state.userId,
      userName: this.state.userName,
      review: userReview,
      rating: userRating,
    };

    console.log(review);

    // Sending datain formdata object so that it can be coded easily in php side
    let formData = new FormData();
    formData.append("prodId", review.prodId);
    formData.append("prodName", review.prodName);
    formData.append("userId", review.userId);
    formData.append("userName", review.userName);
    formData.append("review", review.review);
    formData.append("rating", review.rating);

    //const url = "http://localhost:3000/createUser.php";
    const url =
      "https://tutorawayphpbackend.000webhostapp.com/createProductReview.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        console.log(response.data);

        if (response.status == 200) alert("Review inserted Successfully");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    let reviewsFromDb = {};
    reviewsFromDb = this.state.reviewsFromDb;
    console.log("Reviews from db:", reviewsFromDb);
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Python Tutorial for Beginers</h1>
              <p class="col-md-8 fs-4">
                Everything you need to program in Python in one course!
              </p>
              <button class="btn btn-primary btn-lg" type="button">
                Register
              </button>
            </div>
          </div>

          <h5>User Reviews on this course: </h5>
          <WriteReview handleSubmit={this.handleSubmit} />
          <br />
          <br />
          {reviewsFromDb.length > 0 &&
            reviewsFromDb.map((review) => (
              <>
                <div class="card col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">
                      <FaUserCircle /> {review.username}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Rating: {review.rating}
                    </h6>
                    <p class="card-text">{review.review}</p>
                  </div>
                </div>
                <br />
              </>
            ))}
        </div>
      </main>
    );
  }
}

export default PythonCourse;
