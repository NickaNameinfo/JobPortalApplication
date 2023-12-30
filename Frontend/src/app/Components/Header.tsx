"use client";
import Link from "next/link";
import * as React from "react";
const session = sessionStorage?.getItem("userName");
const Header = () => {
  const [userName, setUserName] = React.useState(session);

  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav">
        <Link href="/" className="logo">
          <img src="/Images/logo.png" alt="Logo"></img>
        </Link>
      </div>

      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <img src="/Images/logo.png" alt="Logo"></img>
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link dropdown-toggle active">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/Components/Dashboard"
                    className="nav-link dropdown-toggle"
                  >
                    Jobs
                  </Link>
                </li>
              </ul>
              <div className="common-btn">
                {!userName ? (
                  <Link className="login-btn" href="/Components/Login">
                    Log in /
                  </Link>
                ) : (
                  <Link className="login-btn" href="/Components/Login">
                    <span
                      onClick={() => {
                        sessionStorage.removeItem("userID");
                        sessionStorage.removeItem("userName");
                      }}
                    >
                      Log Out /
                    </span>
                  </Link>
                )}
                <Link className="login-btn" href="/Components/Login/CompanyLogin">
                  Company Log in
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
