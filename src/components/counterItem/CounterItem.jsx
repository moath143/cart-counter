import React from "react";
import PropTypes from "prop-types";
import "./counteritem.css";

const Counter = (props) => {
  return (
    <div className="container">
      <p>{props.counterItem}</p>
      <div className="btns">
        <button className="btn" onClick={() => props.increment(props.id)}>
          +
        </button>
        <button
          className="btn"
          onClick={() => props.decrement(props.id)}
          disabled={props.counterItem === 0}
        >
          -
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counterItem: PropTypes.number, // number
};

export default Counter;
