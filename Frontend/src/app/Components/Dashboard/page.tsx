import React from 'react'
import Header from '../Header'

const Dashboard = () => {
  return (
   <>
      <div>
        <Header />
        
        <div className="banner-area banner-img-one dashboardbanner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1 className="mb15">Search Your Job</h1>
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
                      </div>
                      <button type="submit" className="btn banner-form-btn">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-area job-area-two pt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="company-details-item">
                  <div className="single-resume-category">
                    <h3>Job Categories</h3>
                    <ul>
                      <li>
                        <a href="#">Web Developer</a>
                        <span>(5)</span>
                      </li>
                      <li>
                        <a href="#">Web Designer</a>
                        <span>(2)</span>
                      </li>
                      <li>
                        <a href="#">UX/UI Designer</a>
                        <span>(7)</span>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                        <span>(0)</span>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                        <span>(1)</span>
                      </li>
                      <li>
                        <a href="#">Networking</a>
                        <span>(0)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="single-resume-category single-resume-types">
                    <h3>Job Locations</h3>
                    <ul>
                      <li>
                        <a href="#">New York</a>
                        <span>(4)</span>
                      </li>
                      <li>
                        <a href="#">Washington</a>
                        <span>(5)</span>
                      </li>
                      <li>
                        <a href="#">Chicago</a>
                        <span>(3)</span>
                      </li>
                      <li>
                        <a href="#">Houston</a>
                        <span>(1)</span>
                      </li>
                      <li>
                        <a href="#">Los Angeles</a>
                        <span>(0)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="job-item">
                      <img src="/Images/home-1/jobs/1.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#!">UI/UX Designer</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Winbrans.com
                          </a>
                          <ul>
                            <li>
                              <i className="icofont-money-bag" />
                              $20k - $25k
                            </li>
                            <li>
                              <i className="icofont-location-pin" />
                              Location 210-27 Quadra, Market Street, Victoria Canada
                            </li>
                          </ul>
                        </div>
                        <div className="job-inner-right">
                          <ul>
                            <li>
                              <a href="job-details.php">Apply</a>
                            </li>
                            {/* <li>
                                              <span>Full Time</span>
                                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-item">
                      <img src="/Images/home-1/jobs/2.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#!">Android Developer</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Infiniza.com
                          </a>
                          <ul>
                            <li>
                              <i className="icofont-money-bag" />
                              $20k - $25k
                            </li>
                            <li>
                              <i className="icofont-location-pin" />
                              Location 210-27 Quadra, Market Street, Victoria Canada
                            </li>
                          </ul>
                        </div>
                        <div className="job-inner-right">
                          <ul>
                            <li>
                              <a href="job-details.php">Apply</a>
                            </li>
                            {/* <li>
                                              <span>Part Time</span>
                                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-item">
                      <img src="/Images/home-1/jobs/3.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#!">Senior Manager</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Glovibo.com
                          </a>
                          <ul>
                            <li>
                              <i className="icofont-money-bag" />
                              $20k - $25k
                            </li>
                            <li>
                              <i className="icofont-location-pin" />
                              Location 210-27 Quadra, Market Street, Victoria Canada
                            </li>
                          </ul>
                        </div>
                        <div className="job-inner-right">
                          <ul>
                            <li>
                              <a href="job-details.php">Apply</a>
                            </li>
                            {/* <li>
                                              <span>Intern</span>
                                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-item ">
                      <img src="/Images/home-1/jobs/4.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#!">Product Designer</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Bizotic.com
                          </a>
                          <ul>
                            <li>
                              <i className="icofont-money-bag" />
                              $20k - $25k
                            </li>
                            <li>
                              <i className="icofont-location-pin" />
                              Location 210-27 Quadra, Market Street, Victoria Canada
                            </li>
                          </ul>
                        </div>
                        <div className="job-inner-right">
                          <ul>
                            <li>
                              <a href="job-details.php">Apply</a>
                            </li>
                            {/* <li>
                                              <span>Part Time</span>
                                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-item">
                      <img src="/Images/home-1/jobs/5.png" alt="Job" />
                      <div className="job-inner align-items-center">
                        <div className="job-inner-left">
                          <h3>
                            <a href="#">Digital Marketer</a>
                          </h3>
                          <a className="company" href="company-details.php">
                            Hotelzo.com
                          </a>
                          <ul>
                            <li>
                              <i className="icofont-money-bag" />
                              $20k - $25k
                            </li>
                            <li>
                              <i className="icofont-location-pin" />
                              Location 210-27 Quadra, Market Street, Victoria Canada
                            </li>
                          </ul>
                        </div>
                        <div className="job-inner-right">
                          <ul>
                            <li>
                              <a href="job-details.php">Apply</a>
                            </li>
                            {/* <li>
                                              <span>Intern</span>
                                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
