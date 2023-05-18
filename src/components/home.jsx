import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Tutor Away from Home!</h1>
              <p class="col-md-12 fs-4">
                Explore our thousands of courses on tons of topics, Boost your
                skills! Get access to numerous courses!
                <br /> Are you an expert and love to teach? Using a series of
                utilities, you can design and create e-courses, or even take
                live classes and give live assignments.
              </p>
              <button class="btn btn-primary btn-lg" type="button">
                Sign up & get started!
              </button>
            </div>
          </div>

          <div class="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Learn Remote!</h2>
                <p>
                  Get access to numerous free courses, check out course library{" "}
                  <br /> Get live class experince with home works | Register to
                  live classes |
                  <br /> Learn new things & Stay updated !!
                </p>
                <button class="btn btn-outline-light" type="button">
                  Sign Up for Free!
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Teach Remote!</h2>
                <p>
                  Are you an expert on a subject? Do you love to teach? <br />{" "}
                  Teach a live class | Publish assighments, grades easily <br />{" "}
                  Tutor a student | Review assignments | Answer Student Doubts
                  <br />
                  Create, Host and Sell Courses !
                </p>
                <button class="btn btn-outline-secondary" type="button">
                  Contact Us!
                </button>
              </div>
            </div>
          </div>

          <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
        </div>
      </main>
    );
  }
}

export default Home;
