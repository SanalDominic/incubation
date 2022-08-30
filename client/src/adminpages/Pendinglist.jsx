import React, { useState } from "react";
import { Modal } from "./Modal";
import axios from "axios";
import { BASE_URL } from "../baseUrl";
export const Pendinglist = ({ pendingApp }) => {
  const [selectedPending, setPendingSelected] = useState([]);
  const showModel = (id) => {
    const result = pendingApp.filter((user) => user._id === id);
    setPendingSelected(result);
  };

  const approveApp = (id) => {
    axios({
      method: "post",
      url: `${BASE_URL}/admin/change`,
      data: {
        id: id,
        status: "approved",
      },
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    });
  };

  const declinedApp = (id) => {
    axios({
      method: "post",
      url: `${BASE_URL}/admin/change`,
      data: {
        id: id,
        status: "declined",
      },
      headers: {
        authorization: `${localStorage.getItem("access-token")}`,
      },
    });
  };

  let index = 0;

  return (
    <>
      <h3 className="text-capitalize">Pending Application list</h3>
      <div class="table-responsive mb-3">
        <table class="table table-bordered table-striped table-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company details</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {pendingApp &&
              pendingApp.map((user) => {
                index++;
                return (
                  <tr key={user._id}>
                    <td>{index}</td>
                    <td>{user.form && user.form.company}</td>
                    <td>{user.form && user.form.email}</td>
                    <td>
                      <button
                        className="btn btn-dark btn-sm"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={(e) => showModel(user._id)}
                      >
                        Open
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => approveApp(user._id)}
                        disabled={user.status === "approved" ? true : false}
                      >
                        {user.status === "approved" ? "APPROVED" : "APPROVE"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={(e) => declinedApp(user._id)}
                        disabled={user.status === "declined" ? true : false}
                      >
                        {user.status === "declined" ? "DECLINED" : "DECLINE"}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Modal selected={selectedPending} />
      </div>
    </>
  );
};
