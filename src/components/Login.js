import React from "react";

const Login = ({ loginIntro }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols">
        <div className=" bg-blue-300">
          <h1 className="font-bold text-xl md:mt-10 mx-2 md:mx-10">Login</h1>

          <p className="mx-2 md:mx-10 text-xs mt-4 text-gray-600">
            {loginIntro}
          </p>

          <form className="mx-2 md:mx-10"></form>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Login;
