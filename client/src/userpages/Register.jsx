import React from "react";
import { useState, useRef } from "react";
import { BASE_URL } from "../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { signupValidation } from "../Validation";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validation, setValidation] = useState({});
  const [data, setData] = useState(false);
  const inputElement = useRef();
  const navigate = useNavigate();

  const saveData = (event) => {
    event.preventDefault();
    setValidation(signupValidation(name, email, password));
    setData(true);
  };

  if (Object.keys(validation).length === 0 && data) {
    axios({
      method: "post",
      url: `${BASE_URL}/register`,
      data: {
        name,
        email,
        password,
      },
    }).then((response) => {
      const { status } = response.data;
      if (status === "error") {
        setName("");
        setEmail("");
        setPassword("");
        setError("User Already Exist..");
        inputElement.current.focus();
      } else {
        navigate("/", { replace: true });
      }
    });
  }

  return (
    <>
      <div className="container-fluid bg-light h-100">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <form className="border p-5 bg-white rounded-3">
            <div>
              <h3 className="fw-bold text-center text-uppercase p-1 mb-5 border-bottom ">
                Register
              </h3>
            </div>
            <div className="input-group mb-4 d-block">
              <div className="d-flex">
                <span className="input-group-text bg-info" id="basic-addon1">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  name="name"
                  value={name}
                  ref={inputElement}
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {validation.name && (
                <label htmlFor="error" className="text-danger p-3 pb-0 ps-0">
                  {validation.name}
                </label>
              )}
            </div>

            <div className="input-group mb-4 d-block">
              <div className="d-flex">
                <span className="input-group-text bg-info" id="basic-addon1">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  name="email"
                  value={email}
                  placeholder="e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {validation.email && (
                <label htmlFor="error" className="text-danger p-3 pb-0 ps-0">
                  {validation.email}
                </label>
              )}
            </div>

            <div className="input-group mb-4 d-block">
              <div className="d-flex">
                <span className="input-group-text bg-info" id="basic-addon1">
                  <i className="bi bi-key-fill"></i>
                </span>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {validation.password && (
                <label htmlFor="error" className="text-danger p-3 pb-0 ps-0">
                  {validation.password}
                </label>
              )}
            </div>
            <div className="text-danger"> {error ? `${error}` : ""}</div>
            <button
              type="submit"
              className="btn btn-dark rounded-pill border w-100 mt-3 p-2"
              onClick={saveData}
            >
              Register
            </button>
            <dvi className="d-flex mt-2 text-center">
              <span>Already have an account</span>
              <span
                class="text-primary ps-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/")}
              >
                Login
              </span>
            </dvi>
          </form>
        </div>
      </div>
    </>
  );
};
