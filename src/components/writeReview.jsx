import React from "react";

const WriteReview = ({ handleSubmit }) => {
  function handleSubmit1(e) {
    e.preventDefault();
    let review = e.target.review.value;
    let rating = e.target.rating.value;

    handleSubmit(review, rating);
  }
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Write Review
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <form style={{ width: "500px" }} onSubmit={handleSubmit1}>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Write Review
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="review" class="form-label">
                    Write review:
                  </label>
                  <textarea
                    class="form-control"
                    id="review"
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-sm-4">
                  <label for="rating" class="form-label">
                    Enter rating / 5:
                  </label>
                  <input
                    class="form-control"
                    id="rating"
                    type="text"
                    placeholder="Enter Rating / 5"
                  ></input>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
