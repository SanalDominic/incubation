import React, { useEffect, useState } from "react";
import { BASE_URL } from "../baseUrl";
import axios from "axios";
import { Page } from "./Page";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { isExpired } from "react-jwt";
export const Adminhome = () => {
  const [newApp, setNewApp] = useState([]);
  const [pendingApp, setPendingApp] = useState([]);
  const navigate = useNavigate();

  const submitPending = (id) => {
    axios({
      method: "post",
      url: `${BASE_URL}/admin/change`,
      data: {
        id: id,
        status: "pending",
      },
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    const isExp = isExpired(accessToken);
    if (isExp) {
      navigate("/", { replace: true });
    }
    axios({
      method: "get",
      url: `${BASE_URL}/admin/adminhome`,
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    }).then((response) => {
      const { data } = response;
      setNewApp(data.newApp);
      setPendingApp(data.pendingApp);
    });
  }, [submitPending]);

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
                    class="nav-link text-uppercase"
                    aria-current="page"
                    href="#"
                  >
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="file"></span>
                    Application List
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={(e) => navigate("/record")}>
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

            <Page
              newApp={newApp}
              pendingApp={pendingApp}
              submitPending={submitPending}
            />
          </main>
        </div>
      </div>
    </>
  );
};
