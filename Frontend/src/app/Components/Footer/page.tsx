import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribe-area">
          <div className="section-title">
            <h2>Subscribe Newsletter</h2>
          </div>
          <div className="subscribe-item">
            <form className="newsletter-form" data-toggle="validator">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="EMAIL"
                required
              />
              <button className="btn subscribe-btn disabled" type="submit">
                Subscribe
              </button>
              <div id="validator-newsletter" className="form-result"></div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="footer-item">
              <div className="footer-logo">
                <a href="#">
                  <img src="/Images/logo.png" alt="Logo" />
                </a>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="icofont-youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="footer-item">
              <div className="footer-category">
                <h3>Category</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-simple-right"></i>
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-simple-right"></i>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-simple-right"></i>
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-simple-right"></i>
                      Post Job
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="footer-item">
              <div className="footer-category">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="index.php">
                      <i className="icofont-simple-right"></i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.php">
                      <i className="icofont-simple-right"></i>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="blog.php">
                      <i className="icofont-simple-right"></i>
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-simple-right"></i>
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-item text-center">
                <p>
                  Copyright ©{" "}
                  <script
                    data-cfasync="false"
                    src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                  ></script>
                  <script>document.write(new Date().getFullYear())</script>2023
                  Rishi Jobs. Designed By{" "}
                  <a href="www.impressbss.com" target="_blank">
                    IBSS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
