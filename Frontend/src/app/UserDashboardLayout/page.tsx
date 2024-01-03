"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const UserDashboardLayout = ({ children }) => {
  const router = useRouter();
  React.useEffect(() => {
    let localUserName = sessionStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      router.back();
    }
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="main-container jobsss">
          <div className="row">
            <div className="col-sm-3">
              <div className="search-type">
                <Link
                  href="/Components/UserDashboard"
                  className="search-buttons card-buttons"
                >
                  Jobs
                </Link>
                <Link href="/SearchJob" className="search-buttons card-buttons">
                  Job Search
                </Link>
                <Link href="" className="search-buttons card-buttons">
                  Notification
                </Link>
                <Link href="" className="search-buttons card-buttons">
                  My Profile
                </Link>
                <Link
                  className="search-buttons card-buttons"
                  href="/Components/Login"
                >
                  <span
                    onClick={() => {
                      sessionStorage.removeItem("userID");
                      sessionStorage.removeItem("userName");
                      sessionStorage.removeItem("companyId");
                      sessionStorage.removeItem("comapnyName");
                      router.push("/");
                    }}
                  >
                    Log Out
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-sm-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
