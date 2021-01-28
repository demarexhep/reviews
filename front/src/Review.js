import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndexes = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const handlePrev = () => {
    setIndex((index) => {
      let prevIndex = index - 1;
      return checkIndexes(prevIndex);
    });
  };
  const handleRandom = () => { //Funksion i cili na mundson random por pa perseritje shembull 1 2 4 3 1  e jo 1 1 2 3 3.
    let randIndex = Math.floor(Math.random() * people.length);
    if (randIndex === index) {
      randIndex = index + 1;
    }
    setIndex(checkIndexes(randIndex));
  };

  const handleNext = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return checkIndexes(nextIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        random
      </button>
    </article>
  );
};

export default Review;
