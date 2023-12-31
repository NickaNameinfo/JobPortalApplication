"use client";
import React from "react";
import Header from "../Header";
import axios from "axios";
import Link from "next/link";
import { infoData } from "../../../../configData";
import JobCard from "../JobCard";

const JobSearch = ({ onSearch }) => {
  const [searchParams, setSearchParams] = React.useState({
    jobType: "",
    jobLocation: "",
    jobTitle: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "asdfsa");
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className="searchbox">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title"
                onChange={handleInputChange}
                name="jobTitle"
              />
              <label>
                <i className="icofont-search-1" />
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                <i className="icofont-location-pin" />
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="City or State"
                onChange={handleInputChange}
                name="jobLocation"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn banner-form-btn"
          onClick={handleSearch}
        >
          Search
        </button>
    </div>
  );
};

const Index = () => {
  const [courses, setCourses] = React.useState([]);

  const [filteredJobs, setFilteredJobs] = React.useState([]);

  console.log(filteredJobs, "filteredJobs");

  const handleSearch = (searchParams) => {
    console.log(searchParams, "searchParams", courses);
    // Implement your search logic here
    const result = courses.filter((job) => {
      const matchJobType =
        !searchParams.jobType ||
        job?.jobType
          .toLowerCase()
          .includes(searchParams?.jobType.toLowerCase());
      const matchJobLocation =
        !searchParams.jobLocation ||
        job?.jobLocation
          .toLowerCase()
          .includes(searchParams?.jobLocation.toLowerCase());
      const matchJobTitle =
        !searchParams.jobTitle ||
        job.jobTitle
          .toLowerCase()
          .includes(searchParams.jobTitle.toLowerCase());

      return matchJobType && matchJobLocation && matchJobTitle;
    });

    setFilteredJobs(result);
  };

  React.useEffect(() => {
    const apiUrl = `${infoData?.baseApi}/courses`;
    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <>
        <div className="banner-area banner-img-one">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1>
                    Start your <span>Dream Career</span> with Job{" "}
                  </h1>
                  <p>
                    Find 40,000+ Jobs, Employment &amp; Career Opportunities
                  </p>
                  <div className="banner-form-area">
                    <JobSearch onSearch={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account-area">
          <div className="container">
            <div className="row account-wrap">
              <div className="col-sm-6 col-lg-4">
                <div className="account-item">
                  <i className="flaticon-approved" />
                  <span>Register Your Account</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="account-item">
                  <i className="flaticon-cv" />
                  <span>Upload Your Resume</span>
                </div>
              </div>
              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                <div className="account-item account-last">
                  <i className="flaticon-customer-service" />
                  <span>Apply for Dream Job</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-area pb-100 pt-50">
          <div className="container">
            <div className="section-title">
              <h2>Recent Jobs</h2>
            </div>
            <div id="container">
              <div className="row">
                {filteredJobs.length > 0 ? (
                  filteredJobs?.map((result) => (
                    <JobCard result={result} column={6} />
                  ))
                ) : courses?.length > 0 ? (
                  courses?.map((result) => (
                    <JobCard result={result} column={6} />
                  ))
                ) : (
                  <p>No Jobs</p>
                )}
                {/* {courses?.map((result: any) => (
                  <JobCard result={result} column={6} />
                ))} */}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
export default Index;
