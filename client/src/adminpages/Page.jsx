import React from "react";
import { Newlist } from "./Newlist";
import { Pendinglist } from "./Pendinglist";
export const Page = ({ newApp, pendingApp, submitPending }) => {
  return (
    <>
      {newApp.length > 0 && (
        <Newlist newApp={newApp} submitPending={submitPending} />
      )}
      {pendingApp.length > 0 && <Pendinglist pendingApp={pendingApp} />}
    </>
  );
};
