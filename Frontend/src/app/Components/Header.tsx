"use client";
import Link from "next/link";
import * as React from "react";
const Header = () => {
  const [userName, setUserName] = React.useState(
    sessionStorage?.getItem("userName")
  );
  const [comapnyName, setCOmpanyName] = React.useState(
    sessionStorage.getItem("companyName")
  );

  return (
    <div className="navbar-area">
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
                {/* <li className="nav-item">
                  <Link href="/" className="nav-link dropdown-toggle active">
                    Home
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    href="/Components/Dashboard"
                    className="nav-link dropdown-toggle"
                  >
                    Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Components/UserDashboard"
                    className="nav-link dropdown-toggle"
                  >
                    Profile
                  </Link>
                </li> */}
              </ul>
              <div className="common-btn">
                {!userName && !comapnyName ? (
                  <>
                    <Link className="login-btn pe-0" href="/Components/Login">
                      Log in /
                    </Link>
                    <Link
                      className="login-btn"
                      href="/Components/Login/CompanyLogin"
                    >
                      Employers / Post Job
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href={
                        comapnyName
                          ? "/CompanyDashboard/CompanyProfile"
                          : "/Components/UserDashboard/UserProfile"
                      }
                    >
                      <img
                        className="user-profile"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                        alt=""
                      />
                      <div className="user-name">
                        {comapnyName ? comapnyName : userName}
                      </div>
                    </Link>
                  </>
                )}
                <div
                  id="google_translate_element"
                  className="lang"
                  style={{ display: "inline" }}
                ></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
