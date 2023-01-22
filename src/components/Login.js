import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Login = ({ loginIntro, onFormSwitch }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    console.log("Submitted successfully");
  };

  const handleChange = (e) => {
    const nextFormValueState = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(nextFormValueState);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && formValues !== "") {
      alert("Signed in successfully");
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters long";
    }
    return errors;
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-100 h-[70vh] md:h-[100vh]">
          <h1 className="font-semibold text-xl mt-10 md:mt-20 mx-10 md:mx-20">
            Welcome here
          </h1>

          <h2 className="font-semibold text-xl mx-10 md:mx-20">Please Login</h2>

          <p className="mx-10 md:mx-20 text-xs mt-2 text-gray-600 mb-6">
            {loginIntro}
          </p>

          <hr className="mt-5 mx-10 md:mx-20" />

          <form
            onSubmit={handleSubmit}
            className="mt-6 mx-10 md:mx-20 justify-items-center"
          >
            <label htmlFor="email" className="block">
              Email*
            </label>
            <input
              name="email"
              className="rounded-full text-sm w-60 md:w-64 px-4 p-2 text-gray-500"
              placeholder="mail@website.com"
              onChange={handleChange}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <label htmlFor="password" className="block mt-2">
              Password*
            </label>
            <input
              name="password"
              type={"password"}
              className="rounded-full text-sm w-60 md:w-64 px-4 p-2 text-gray-500 mb-6"
              placeholder="Min. 8 character"
              onChange={handleChange}
            />
            {error.password && (
              <p className="text-red-500 text-sm mb-2">{error.password}</p>
            )}

            <Button bgColor={"blue"} title="Login" />
          </form>

          <div className="mt-4">
            <p className="mx-10 md:mx-20 text-xs font-semibold">
              Not registered yet?{" "}
              <button
                onClick={() => onFormSwitch("register")}
                className="text-violet-500 text-xs font-semibold"
              >
                Create an Account
              </button>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-l from-red-500 to-blue-700">
          <div className="h-64 w-64 rounded-full bg-gray-300 mx-6 md:mx-24 mt-6 mb-2 md:mt-24 animate-pulse">
            <div
              style={{ left: "20%" }}
              className="bg-white h-10 w-10 rounded-full relative"
            >
              <img src="/google.png" />
            </div>

            <div
              style={{ left: "90%", top: "20%" }}
              className="bg-white h-10 w-10 rounded-full relative"
            >
              <img src="/facebook.jpg" />
            </div>

            <div
              style={{ left: "33%", top: "57%" }}
              className="bg-white h-10 w-10 rounded-full relative"
            >
              <img className="h-7 w-7" src="/instagram.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
