import React, { useState } from "react";
import Button from "./Button";

const Register = ({ onFormSwitch }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = { fullname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.fullname) {
      errors.fullname = "Full name is required";
    } else if (!values.fullname.length < 4) {
      errors.fullname = "Full name shouldn't be less than 4 characters";
    }

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
      {Object.keys(error).length === 0 && isSubmit ? (
        <div className="text-green-500 text-sm">Registered successfully!</div>
      ) : (
        <pre></pre>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-100 h-[70vh] md:h-[100vh]">
          <h1 className="font-semibold text-xl mt-10 md:mt-20 mx-10 md:mx-20">
            Welcome here
          </h1>

          <h2 className="font-semibold text-xl mx-10 md:mx-20 mb-3">
            Please Register
          </h2>

          <div className="mx-10 md:mx-20">
            <Button
              bgColor={"white"}
              img={"#"}
              location="mail.google.com"
              title={"Sign up with Google"}
            />
          </div>

          <hr className="mt-5 mx-10 md:mx-20" />

          <form
            onSubmit={handleSubmit}
            className="mt-6 mx-10 md:mx-20 justify-items-center"
          >
            <label htmlFor="fullname" className="block">
              Full Name*
            </label>
            <input
              className="rounded-full text-sm w-60 md:w-64 px-4 p-2 text-gray-500"
              placeholder="Richard Browne"
              onChange={handleChange}
            />
            <p className="text-red-500 text-sm">{error.fullname}</p>

            <label htmlFor="email" className="block">
              Email*
            </label>
            <input
              className="rounded-full text-sm w-60 md:w-64 px-4 p-2 text-gray-500"
              placeholder="mail@website.com"
              onChange={handleChange}
            />
            <p className="text-red-500 text-sm">{error.email}</p>

            <label htmlFor="password" className="block mt-2">
              Password*
            </label>
            <input
              type={"password"}
              className="rounded-full text-sm w-60 md:w-64 px-4 p-2 text-gray-500 mb-6"
              placeholder="Min. 8 character"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-sm mb-2">{error.password}</p>

            <Button bgColor={"blue"} location={"/"} title="Register" />
          </form>

          {/* <div className="flex mt-2 font-medium mx-8 md:mx-20">
            <input
              className="mx-1 mt-[-10px]"
              type="checkbox"
              value="Remember me"
            />

            <label className="text-xs">Remember me</label>

            <button className="mt-[-6px] mx-5 md:mx-14 mb-4">
              <a className="text-violet-500 text-xs">Forget password?</a>
            </button>
          </div> */}

          <div className="mt-4">
            <p className="mx-10 md:mx-20 text-xs font-semibold">
              Already have an account?{" "}
              <button
                onClick={() => onFormSwitch("login")}
                className="text-violet-500 text-xs font-semibold"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        <div className="bg-blue-600">
          <div className="h-64 w-64 rounded-full bg-gray-500 mx-6 md:mx-24 mt-6 mb-2 md:mt-24 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
