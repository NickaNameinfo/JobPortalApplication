"use client";
import CompanyDashboardLayout from "@/app/CompanyDashboardLayout/page";
import axios from "axios";
import React from "react";
import { infoData } from "../../../../configData";
import Link from "next/link";

const Jobs = () => {
  const [company, setCompany] = React.useState([]);

  React.useEffect(() => {
    let companyId = sessionStorage.getItem("companyId");
    axios
      .get(`${infoData.baseApi}/courses`)
      .then((response) => {
        // Handle the successful response
        console.log(
          response?.data?.data?.data,
          "response.data123412",
          companyId
        );
        let tempData = response?.data?.data?.data.filter(
          (item) => item.companyId === companyId
        );
        setCompany(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <CompanyDashboardLayout>
      <section className="job-area job-area-two">
        <div className="container">
          <div className="row">
            {company?.map((result) => (
              <div className="col-lg-12">
                <div className="job-item">
                  <img src="/images/home-1/jobs/1.png" alt="Job" />
                  <div className="job-inner align-items-center">
                    <div className="job-inner-left">
                      <h3>
                        <Link href="">{result?.jobTitle}</Link>
                      </h3>
                      <Link className="company" href="">
                        {result?.companyName}
                      </Link>
                      <ul>
                        <li>
                          <i className="icofont-money-bag" />
                          {result?.salaryFrom} - {result?.salaryTo}
                        </li>
                        <li>
                          <i className="icofont-location-pin" />
                          {result?.jobLocation}
                        </li>
                      </ul>
                    </div>
                    <div className="job-inner-right">
                      <ul>
                        <li>
                          <select name="" id="">
                            <option value={0}>Paused</option>
                            <option value={1}>Closed</option>
                          </select>
                        </li>
                        <li>
                          <span>
                            <i>0</i> Applied
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CompanyDashboardLayout>
  );
};

export default Jobs;
