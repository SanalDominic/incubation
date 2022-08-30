import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../baseUrl";
import { isExpired } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { Userform } from "./Userform";
import { Userheader } from "./Userheader";

export const Home = () => {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("user-token");
    const isExp = isExpired(accessToken);

    if (isExp) {
      navigate("/", { replace: true });
    }
    
    axios({
      method: "get",
      url: `${BASE_URL}/admin/home`,
      headers: {
        authorization: `${localStorage.getItem("user-token")}`,
      },
    }).then((response) => {
      console.log(response);
      const { data } = response;
      if (data.status) {
        setSubmitted(true);
        setStatus(data.progress);
      }
    });
  }, [submitted]);

  const submitForm = (event) => {
   
    event.preventDefault();
    axios({
      method: "post",
      url: `${BASE_URL}/admin/submitform`,
      data: {
        values: values,
      },
      headers: {
        authorization: `${localStorage.getItem("user-token")}`,
      },
    }).then((response) => {
      if (response.data) {
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      <Userheader />
      {submitted ? (
        <>
          <div className="container-fluid bg-light h-100">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <div class="card text-center">
                <div class="card-header fw-bold fs-3">Status</div>
                {status &&
                <div class="card-body p-5">
                <div
                  className={`spinner-border mb-3 ${
                    status === "new"
                      ? "text-dark"
                      : status === "pending"
                      ? "text-info"
                      : status === "approved"
                      ? "text-success "
                      : "text-danger"
                  }`}
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div>
                  {status === "new" ? (
                    <>
                      <p className="text-success fw-bold fs-4">Mmh !</p>
                      <p className="fw-bold">
                        Your application is on Process
                      </p>
                    </>
                  ) : status === "pending" ? (
                    <>
                      <p className="text-success fw-bold fs-4">Mmh !</p>
                      <p className="fw-bold">Your application is Pending</p>
                    </>
                  ) : status === "approved" ? (
                    <>
                      <p className="text-success fw-bold fs-4">Yeah !</p>
                      <p className="fw-bold">Your application is Approved</p>
                    </>
                  ) : (
                    <>
                      <p className="text-danger fw-bold fs-4">Sorry</p>
                      <p className="fw-bold">Your application is Declined</p>
                    </>
                  )}
                </div>
                <p class="card-text">We will be in touch with you stay put</p>
              </div>
                
                }
                
              </div>
            </div>
          </div>
        </>
      ) : (
        <Userform
          values={values}
          setValues={setValues}
          submitForm={submitForm}
        />
      )}
    </>
  );
};
