// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./rating.css";
import PropTypes from 'prop-types';

const Ratings = ({ ratingHandler , modal}) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSelectedRating = (rate) => {
    setSelectedRating(rate);
    ratingHandler(rate);
  };

  return (
    <>
      <div className="rating-card">
        <picture className="star">
          <img src="./icon-star.svg" alt="" />
        </picture>
        <h1>How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve your offering!
        </p>
        <div className="radio-container">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div
              key={rating}
              onClick={() => handleSelectedRating(rating)}
              className={`radio ${selectedRating === rating ? "radio-selected" : ""}`}
            >
              {rating}
            </div>
          ))}
        </div>
        <button onClick={modal} className="submit-button" type="submit">
          SUBMIT
        </button>
      </div>
    </>
  );
};

Ratings.propTypes = {
  ratingHandler: PropTypes.func,
  modal: PropTypes.func,
};

export default Ratings;
