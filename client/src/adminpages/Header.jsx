import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem("access-token");
    navigate("/");
  };
  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>

        <div className="navbar-nav d-flex" style={{ flexFlow: "row" }}>
          <a class="nav-link px-3 text-white" onClick={signout}>
            Sign out
          </a>
        
        </div>
      </header>
    </>
  );
};
