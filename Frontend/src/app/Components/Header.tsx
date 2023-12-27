import React from "react";

const Header = () => {
  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav">
        <a href="index.html" className="logo">
          <img src="/Images/logo.png" alt="Logo"></img>
        </a>
      </div>

      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="/Images/logo.png" alt="Logo"></img>
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle active">
                    Home
                    <i className="icofont-simple-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Home Page 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.php" className="nav-link">
                        Home Page 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.php" className="nav-link">
                        Home Page 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.php" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Jobs
                    <i className="icofont-simple-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="job-list.php" className="nav-link">
                        Job List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="favourite-job.php" className="nav-link">
                        Favourite Jobs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="job-details.html" className="nav-link">
                        Job Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="postjob.html" className="nav-link">
                        Post A Job
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Candidates
                    <i className="icofont-simple-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="candidate-list.php" className="nav-link">
                        Candidate List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="candidate-details.php" className="nav-link">
                        Candidate Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="single-resume.php" className="nav-link">
                        Single Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="submit-resume.php" className="nav-link">
                        Submit Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pricing.php" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="dasboard.html" className="nav-link">
                        Candidate dashboard
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Pages
                    <i className="icofont-simple-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="company-list.php" className="nav-link">
                        Company List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="company-details.php" className="nav-link">
                        Company Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="login.html" className="nav-link">
                        Login Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="create-account.html" className="nav-link">
                        Create Account Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="profile.php" className="nav-link">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="single-profile.php" className="nav-link">
                        Single Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404.php" className="nav-link">
                        404
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="faq.php" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="terms-and-conditions.php" className="nav-link">
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="privacy-policy.php" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Blogs
                    <i className="icofont-simple-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog.php" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-details.php" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact.php" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="common-btn">
                <a className="login-btn" href="login.html">
                  {/* <!-- <i className="icofont-plus-square"></i> --> */}
                  Log in
                </a>{" "}
                &nbsp; | &nbsp;
                <a className="sign-up-btn" href="joblogin.html">
                  {/* <!-- <i className="icofont-user-alt-4"></i> --> */}
                  Employers / Post Job
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
