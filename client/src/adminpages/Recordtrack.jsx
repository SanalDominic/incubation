import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../baseUrl";
import axios from "axios";

export const Recordtrack = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}/admin/record`,
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    }).then((response) => {
      const {
        data: { status, data },
      } = response;
      // console.log(status, data);
      if (status === "ok") setUsers(data);
    });
  }, []);
  let index = 0;
  return (
    <>
      <Header />

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link  text-uppercase"
                    aria-current="page"
                    href="#"
                  >
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={(e) => navigate("/admin")}>
                    <span data-feather="file"></span>
                    Application List
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="shopping-cart"></span>
                    Record Track
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={(e) => navigate("/booking")}>
                    <span data-feather="shopping-cart"></span>
                    Booking Slots
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-5 border-bottom">
              <h3 className="text-uppercase">Dashboard</h3>
            </div>
            <h3 className="text-capitalize">New Application list</h3>
            <div class="table-responsive mb-3">
              <table class="table table-bordered table-striped table-sm">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Company details</th>
                    <th scope="col">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => {
                      index++;
                      return (
                        <tr key={user._id}>
                          <td>{index}</td>
                          <td>{user.form && user.form.company}</td>
                          <td>
                            <p> {user.form && user.form.address}</p>
                            <p>{user.form && user.form.email}</p>
                            <p> {user.form && user.form.number}</p>
                          </td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-striped progress-bar-animated fw-bold"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={
                                  user.status === "new"
                                    ? {
                                        width: "100%",
                                        backgroundColor: "grey",
                                        opacity: 0.7,
                                      }
                                    : user.status === "pending"
                                    ? {
                                        width: "50%",
                                        backgroundColor: "orange",
                                        opacity: 0.7,
                                      }
                                    : user.status === "approved"
                                    ? {
                                        width: "80%",
                                        backgroundColor: "green",
                                        opacity: 0.7,
                                      }
                                    : {
                                        width: "100%",
                                        backgroundColor: "red",
                                        opacity: 0.7,
                                      }
                                }
                              >
                                {user.status === "new"
                                  ? "New"
                                  : user.status === "pending"
                                  ? "Pending"
                                  : user.status === "approved"
                                  ? "Approved "
                                  : "Declined"}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
