"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const UserDashboardLayout:any = ({ children }) => {
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const router = useRouter();
  React.useEffect(() => {
    // let localUserName = localStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      router.push("/");
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
                  href="/Components/UserDashboard/UserProfile"
                  className="search-buttons card-buttons"
                >
                  My Profile
                </Link>
                <Link
                  href="/Components/UserDashboard/AppliedJob"
                  className="search-buttons card-buttons"
                >
                  Applied Jobs
                </Link>
                <Link
                  href="/Components/UserDashboard/SearchJob"
                  className="search-buttons card-buttons"
                >
                  Search Jobs
                </Link>
                <Link href="" className="search-buttons card-buttons">
                  Saved Jobs
                </Link>
                {/* <Link href="" className="search-buttons card-buttons">
                  Notification
                </Link> */}
                <Link
                  href="/Components/UserDashboard/Help"
                  className="search-buttons card-buttons"
                >
                  Help
                </Link>
                <Link
                  href="/Components/UserDashboard/Settings"
                  className="search-buttons card-buttons"
                >
                  Settings
                </Link>
                <Link
                  className="search-buttons card-buttons"
                  href="/Components/Login"
                >
                  <span
                    onClick={() => {
                      localStorage.removeItem("userID");
                      localStorage.removeItem("userName");
                      localStorage.removeItem("companyId");
                      localStorage.removeItem("comapnyName");
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
