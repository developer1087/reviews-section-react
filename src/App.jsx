import { useState } from "react";
import reviews from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNum = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviews.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      return checkNum(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      return checkNum(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNum(randomNum));
  };
  return (
    <main>
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
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
        </div>
        <div className="btn-container">
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Choose Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
