import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginV2 = ({ colorModeColors }) => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const handleFormChange = (e) => {
    const key = String(e.target.id).split("-")[1];
    setLoginDetails({ ...loginDetails, [key]: e.target.value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.username === "" || loginDetails.password === "") {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoginDetails({
      username: "",
      password: "",
    });
    toast.success("Login successful!");
    navigate("/students");
  };
  const navigateToRegister = () => {
    setLoginDetails({
      username: "",
      password: "",
    });
    navigate("/register");
  };
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center pt-12 pb-56"
      style={{ backgroundColor: colorModeColors.bg }}
    >
      <Toaster />
      <div
        className="text-4xl font-inter font-bold select-none p-12 flex flex-col items-center gap-12 2xl:w-1/3 xl:w-1/2 lg:w-2/3 h-full"
        style={{ color: colorModeColors.title }}
      >
        <span>Login</span>
        <form
          className="w-full flex flex-col gap-3 h-full"
          onSubmit={handleLoginSubmit}
          onChange={handleFormChange}
        >
          <label
            htmlFor="login-username"
            className="text-base font-medium"
            style={{ color: colorModeColors.inputText }}
          >
            Username
          </label>
          <input
            type="text"
            id="login-username"
            className="block p-3 pl-6 text-sm font-inter font-medium text-gray-900 border-2 border-gray rounded-lg w-full"
            style={{
              borderColor: colorModeColors.buttonBorder,
              backgroundColor: colorModeColors.buttonBackGround,
              color: colorModeColors.inputText,
            }}
            autoComplete="off"
          />
          <label
            htmlFor="login-password"
            className="text-base font-medium"
            style={{ color: colorModeColors.inputText }}
          >
            Password
          </label>
          <input
            type="password"
            id="login-password"
            className="block p-3 pl-6 text-sm font-inter font-medium text-gray-900 border-2 border-gray rounded-lg w-full"
            style={{
              borderColor: colorModeColors.buttonBorder,
              backgroundColor: colorModeColors.buttonBackGround,
              color: colorModeColors.inputText,
            }}
            autoComplete="off"
          />
          <button
            className="mt-5 pt-2 pb-2 pl-4 pr-4 bg-creme rounded-xl hover:cursor-pointer shadow-xl text-black text-base"
            type="submit"
          >
            Login
          </button>
          <span className="text-base font-normal flex gap-2 justify-center">
            <span>Don't have an account?</span>
            <a
              className="font-bold hover:cursor-pointer"
              onClick={navigateToRegister}
            >
              Sign Up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginV2;
