import { React, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

import axios from "axios";

import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../Helper/Validate";
import { Navigate } from "react-router-dom";

import Header from "../../Components/Header/Header";
import InputBox from "../../Components/InputBox/InputBox";
import Button from "../../Components/Button/Button";
import { authenticateUser } from "../../Helper/authenticateUser";

function Login() {
  document.title = "Login";

  const [formData, setFormData] = useState({ userName: "", password: "" });

  const [navigate, setNavigate] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const valdation = (value) => {
    if (validateUsername(value.userName)) {
      if (validatePassword(value.password)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!valdation(formData)) {
      toast.error("Check the Credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const sessionid = authenticateUser(formData.userName, formData.password);
    sessionid.then((res) => {
      console.log(res);
      if (res === "error") {
        toast.error("Credentials Does Not Exist", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        sessionStorage.setItem("sessionID", res);
        toast.success("Success", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          setNavigate(true);
        }, 3000);
      }
    });
  };

  return (
    <>
      <div className="MainContainer">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
        />
        <Header type="login" />
        <div className="MainContent">
          <div className="container">
            <div className="LoginHeader">Sign In</div>
            <div className="LoginSubtext">
              Sign In To Your Self Service Portal
            </div>
            <form method="POST" onSubmit={handleForm} className="form">
              <InputBox
                type="text"
                className="LoginInputBox"
                onChange={handleChange}
                name="userName"
                value={formData.userName}
                placeholder="Username"
              />
              <InputBox
                type="password"
                className="LoginInputBox"
                onChange={handleChange}
                name="password"
                value={formData.password}
                placeholder="Password"
              />

              <Button
                type="submit"
                value="LOGIN"
                className="LoginButton"
              ></Button>
            </form>
          </div>
        </div>
      </div>
      {navigate && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Login;
