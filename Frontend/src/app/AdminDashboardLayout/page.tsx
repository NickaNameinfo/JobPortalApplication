"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AdminDashboardLayout:any = ({ children }) => {
  const router = useRouter();
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
                href="/AdminDashboard"
                className="search-buttons card-buttons"
              >
                Comapny List
              </Link>
              <Link
                href="/AdminDashboard/JobList"
                className="search-buttons card-buttons"
              >
                Job List
              </Link>
              <Link
                href="/AdminDashboard/AppliedList"
                className="search-buttons card-buttons"
              >
                Applied List
              </Link>
              <Link
                href="/AdminDashboard/Candidates"
                className="search-buttons card-buttons"
              >
                Candidates
              </Link>
              <a className="search-buttons card-buttons">
                <span
                  onClick={() => {
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

export default AdminDashboardLayout;
