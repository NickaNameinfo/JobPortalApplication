"use client";
import * as React from "react";
import UserDashboard from "../../../UserDashboardLayout/page";
import { infoData } from "../../../../../configData";
import axios from "axios";
import UserDashboardLayout from "../../../UserDashboardLayout/page";
import Link from "next/link";
import JobProfileCard from "../../JobProfileCard";
import JobCard from "../../JobCard";

const SearchJob = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = `${infoData?.baseApi}/courses`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response?.data?.data?.data, "response.data123412");
        setCourses(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <UserDashboardLayout>
      <>
        
        <div className="searched-jobs">
          <div className="searched-bar">
            {/* <div className="searched-show">Showing {courses?.length} Jobs</div> */}
            {/* <div className="searched-sort">
              Sort by: <span className="post-time">Newest Post </span>
              <span className="menu-icon">▼</span>
            </div> */}
          </div>
          <div className="job-cards d-block">
            {courses?.map((result) => (
              <JobCard result={result} column={12} appiled={true}/>
            ))}
          </div>
        </div>
      </>
    </UserDashboardLayout>
  );
};

export default SearchJob;
