import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Login = ({ loginIntro }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-100 h-[100vh]">
          <h1 className="font-bold text-xl mt-10 md:mt-16 mx-10 md:mx-20">
            Login
          </h1>

          <p className="mx-10 md:mx-20 text-xs mt-4 text-gray-600">
            {loginIntro}
          </p>

          {/* <Button
            img={"#"}
            location="mail.google.com"
            title={"Sign in with Google"}
          /> */}

          <hr className="mt-4 mx-10 md:mx-20" />

          <form className="mt-4 mx-10 md:mx-20 justify-items-center">
            <span className="block text-xs">Email*</span>
            <input
              className="rounded-full w-64 px-4 p-2 text-gray-500"
              placeholder="mail@website.com"
            />

            <span className="block text-xs mt-2">Password*</span>
            <input
              className="rounded-full w-64 px-4 p-2 text-gray-500"
              placeholder="Min. 8 character"
            />
          </form>

          <div className="flex mt-2 font-medium">
            <button className="text-xs mx-10 md:mx-20" type="check-box">
              Remember me
            </button>

            <button>
              <a className="text-violet-500 text-xs">Forget password?</a>
            </button>
          </div>

          {/* <Button /> */}

          <div className="mt-2">
            <p className="mx-10 md:mx-20 text-xs font-semibold">
              Not registered yet?{" "}
              <span className="text-violet-500 text-xs font-semibold">
                Create an Account
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-600">
          <div className="h-72 w-72 rounded-full bg-gray-500 mx-10 md:mx-24 mt-6 mb-2 md:mt-24 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
