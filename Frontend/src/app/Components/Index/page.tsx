"use client";
import React from "react";
import Header from "../Header";
import axios from "axios";

const Index = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/courses";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        setCourses(response?.data?.data?.data); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <Header />
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
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Title"
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
                            />
                          </div>
                        </div>
                        {/* <div class="col-lg-4">
                                      <div class="form-group">
                                          <select class="form-select"
                                              aria-label="Default select example">
                                              <option>Job Category</option>
                                              <option>ICT</option>
                                              <option>Finance</option>
                                              <option>Marketing</option>
                                              <option>Production</option>
                                              <option>Bank</option>
                                              <option>Hospitality</option>
                                              <option>NGO</option>
                                          </select>
                                      </div>
                                  </div> */}
                      </div>
                      <button type="submit" className="btn banner-form-btn">
                        Search
                      </button>
                    </form>
                  </div>
                  {/* <div class="banner-btn">
                          <a href="create-account.php">Create Your
                              Profile</a>
                          <a href="submit-resume.php">Upload Your CV</a>
                      </div> */}
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
                {courses?.map((result: any) => (
                  <div className="col-lg-6 mix web ui" key={result?.id}>
                    <div className="job-item">
                      <img src="/Images/home-1/jobs/1.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#">{result?.jobTitle}</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Winbrans.com
                          </a>
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
                              <a href="#">Apply</a>
                            </li>
                            {/* <li>
                                          <span>Full Time</span>
                                      </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
export default Index;
