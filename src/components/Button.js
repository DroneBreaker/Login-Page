import React from "react";
import { Link } from "react-router-dom";

const Button = ({ img, location, title }) => {
  return (
    <button className="flex mx-2 md:mx-4 p-2 px-4">
      <img src={img} alt="G" />
      <Link to={location}>{title}</Link>
    </button>
  );
};

export default Button;
