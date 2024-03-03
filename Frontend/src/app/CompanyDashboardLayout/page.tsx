"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CompanyDashboardLayout:any = ({ children }) => {
  const [companyName, setLoginUserName] = React.useState(
    localStorage.getItem("companyName")
  );
  const router = useRouter();

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("companyName");
    console.log(companyName, "sdfas");
    if (!companyName) {
      router.push("/");
    }
  }, []);

  return (
    <div className="wrapper">
      {/* <div className="fright mt-4">
        <Link href="/PostJob" className="search-buttons card-buttons ">
          Post a Job
        </Link>
      </div> */}
      <div className="main-container jobsss">
        <div className="row">
          <div className="col-sm-3">
            <div className="search-type">
              <Link
                href="/CompanyDashboard/PostJob"
                className="search-buttons card-buttons"
              >
                Create a jobs
              </Link>
              <Link
                href="/CompanyDashboard/CompanyProfile"
                className="search-buttons card-buttons"
              >
                Company Profile
              </Link>
              <Link
                href="/CompanyDashboard/Jobs"
                className="search-buttons card-buttons"
              >
                Jobs
              </Link>
              <Link
                href="/CompanyDashboard/Candidates"
                className="search-buttons card-buttons"
              >
                Candidates
              </Link>
              <Link href="/CompanyDashboard/Settings" className="search-buttons card-buttons">
                Settings
              </Link>

              <a className="search-buttons card-buttons">
                <span
                  onClick={() => {
                    localStorage.removeItem("userID");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("companyId");
                    localStorage.removeItem("companyName");
                    location.reload();
                    router.push("/");
                  }}
                >
                  Log Out
                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboardLayout;
