import React from "react";
export const Newlist = ({ newApp, submitPending }) => {
  let index = 0;

  return (
    <>
      <h3 className="text-capitalize">New Application list</h3>
      <div class="table-responsive mb-3">
        <table class="table table-bordered table-striped table-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company details</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {newApp &&
              newApp.map((user) => {
                index++;
                return (
                  <tr key={user._id}>
                    <td>{index}</td>
                    <td>{user.form && user.form.company}</td>
                    <td>{user.form &&  user.form.email}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => submitPending(user._id)}
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
