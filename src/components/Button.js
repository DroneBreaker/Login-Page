import React from "react";
import { Link } from "react-router-dom";

const Button = ({ bgColor, img, title, onFormSwitch }) => {
  return (
    <button
      onClick={() => onFormSwitch("register")}
      type="submit"
      style={{
        background: bgColor,
        color:
          title === "Sign in with Google"
            ? "black"
            : title === "Sign up with Google"
            ? "black"
            : "white",
        paddingLeft:
          title === "Sign in with Google"
            ? "65px"
            : title === "Sign up with Google"
            ? "60px"
            : "100px",
      }}
      className="flex mx-10 md:mx-20 p-2 w-60 md:w-64 rounded-full text-xs text-white"
    >
      <img src={img} />
      <p className="mx-2">{title}</p>
    </button>
  );
};

export default Button;
