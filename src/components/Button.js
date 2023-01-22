import React from "react";

const Button = ({ bgColor, img, title }) => {
  return (
    <button
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
      className="flex p-2 w-60 md:w-64 rounded-full text-xs text-white"
    >
      <img src={img} />
      <p className="mx-2">{title}</p>
    </button>
  );
};

export default Button;
