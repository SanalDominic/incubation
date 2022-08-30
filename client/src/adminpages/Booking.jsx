import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../baseUrl";

export const Booking = () => {
  const navigate = useNavigate();
  const [slotA, setSlotA] = useState("");
  const [slotB, setSlotB] = useState("");
  const [slotC, setSlotC] = useState("");
  const [slotD, setSlotD] = useState("");
  const [users, setUsers] = useState("");
  const [booked, setBooked] = useState("");
  const [slotId, setSlotId] = useState("");
  const [isBooked, setisBooked] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}/admin/slot`,
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    }).then((response) => {
      const { data } = response;
      if (data.status === "ok") {
        setUsers(data.users);
        const a = data.slots.filter((slot) => slot.section === "A");
        setSlotA(a);
        const b = data.slots.filter((slot) => slot.section === "B");
        setSlotB(b);
        const c = data.slots.filter((slot) => slot.section === "C");
        setSlotC(c);
        const d = data.slots.filter((slot) => slot.section === "D");
        setSlotD(d);
      }
    });
  }, [isBooked]);

  const slotBooked = () => {
    if (!booked == "" && !slotId == "") {
      axios({
        method: "post",
        url: `${BASE_URL}/admin/booked`,
        data: {
          id: slotId,
          userId: booked,
        },
        headers: {
          authorization: `${localStorage.getItem("access-token")}`,
        },
      }).then((response) => {
        const { data } = response;
        console.log(data);
        if (data === "isBooked") {
          setisBooked(true);
        }
      });
    }
  };

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
                  <a class="nav-link" onClick={(e) => navigate("/admin")}>
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
                  <a class="nav-link active" href="#">
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
            <div className="mb-2 d-flex">
              {slotA &&
                slotA.map((slot) => {
                  return (
                    <div
                      key={slot._id}
                      className={`m-1 div ${slot.isBooked ? `booked` : ""}`}
                      data-bs-toggle={slot.isBooked ? "" : "modal"}
                      data-bs-target="#staticBackdrop"
                      onClick={(e) => setSlotId(slot._id)}
                    ></div>
                  );
                })}
            </div>

            <div className="row">
       
              <div className="d-flex">
              
                {slotB &&
                  slotB.map((slot) => {
                    return (
                      <div
                        key={slot._id}
                        className={`m-1 div ${slot.isBooked ? `booked` : ""}`}
                        data-bs-toggle={slot.isBooked ? "" : "modal"}
                        data-bs-target="#staticBackdrop"
                        onClick={(e) => setSlotId(slot._id)}
                      ></div>
                    );
                  })}
              </div>
              <div className=" d-flex">
                {slotC &&
                  slotC.map((slot) => {
                    return (
                      <div
                        key={slot._id}
                        className={`m-1 div ${slot.isBooked ? `booked` : ""}`}
                        data-bs-toggle={slot.isBooked ? "" : "modal"}
                        data-bs-target="#staticBackdrop"
                        onClick={(e) => setSlotId(slot._id)}
                      ></div>
                    );
                  })}
              </div>
              <div className="d-flex">
                {slotD &&
                  slotD.map((slot) => {
                    return (
                      <div
                        key={slot._id}
                        className={`m-1 div ${slot.isBooked ? `booked` : ""}`}
                        data-bs-toggle={slot.isBooked ? "" : "modal"}
                        data-bs-target="#staticBackdrop"
                        onClick={(e) => setSlotId(slot._id)}
                      ></div>
                    );
                  })}
              </div>
            </div>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog  modal-dialog-centered w-auto">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <select
                      class="form-select w-auto"
                      onChange={(e) => setBooked(e.target.value)}
                    >
                      <option selected>select Company</option>
                      {users &&
                        users.map((user) => {
                          return (
                            <option value={user._id}>
                              {user.form.company}
                            </option>
                          );
                        })}
                    </select>
                    {isBooked && (
                      <p className="p-2 text-success">Slot Booked</p>
                    )}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={slotBooked}
                    >
                      Book Slot
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
