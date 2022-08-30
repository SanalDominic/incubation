import axios from "axios";
import React from "react";
import { useState } from "react";
import { BASE_URL } from "./baseUrl";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "./Validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState({});
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  const authData = (event) => {
    event.preventDefault();
    setValidation(loginValidation(email, password));
    setData(true);
  };

  if (Object.keys(validation).length === 0 && data) {
    axios({
      method: "post",
      url: `${BASE_URL}/admin/login`,
      data: {
        email,
        password,
      },
    }).then((response) => {
      const authValue = response.data;
      if (authValue.status === "error") {
        setError(true);
      } else {
        setError(false);

        if (authValue.role === 1) {
          localStorage.setItem("user-token", authValue.token);
          navigate("/home");
        } else {
          localStorage.setItem("access-token", authValue.token);
          navigate("/admin");
        }
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
                Login
              </h3>
            </div>
            <div className="input-group mb-3 d-block">
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
            <div className="text-danger">
              {error ? "User name or password invalid" : ""}
            </div>
            <button
              type="submit"
              className="btn btn-dark rounded-pill border w-100 mt-3 p-2"
              onClick={authData}
            >
              Sign in
            </button>
            <dvi className="d-flex mt-2 text-center">
              <span>Don't have an account</span>
              <span
                class="text-primary ps-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/register")}
              >
                Register
              </span>
            </dvi>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
