import React from 'react'

const Footer = () => {
  return (
    <>
      <div>
      <div className="container">
  <div className="subscribe-area">
    <div className="section-title">
      <h2>Subscribe Newsletter</h2>
    </div>
    <div className="subscribe-shape">
    <img src="/Images/shape/1.png" alt="Shape" />
    <img src="/Images/shape/1.png" alt="Shape" />
    <img src="/Images/shape/1.png" alt="Shape" />
    <img src="/Images/shape/1.png" alt="Shape" />
    <img src="/Images/shape/2.png" alt="Shape" />
  </div>
    <div className="subscribe-item">
      <form className="newsletter-form" data-toggle="validator">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
          name="EMAIL"
          required
          autoComplete="off"
        />
        <button className="btn subscribe-btn" type="submit">
          Subscribe
        </button>
        <div id="validator-newsletter" className="form-result" />
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
          {/* <p>Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                          </p> */}
          <ul>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="icofont-youtube-play" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="icofont-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="icofont-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <i className="icofont-twitter" />
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
                <i className="icofont-simple-right" />
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-simple-right" />
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-simple-right" />
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-simple-right" />
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
                <i className="icofont-simple-right" />
                Home
              </a>
            </li>
            <li>
              <a href="about.php">
                <i className="icofont-simple-right" />
                About Us
              </a>
            </li>
            <li>
              <a href="blog.php">
                <i className="icofont-simple-right" />
                Blogs
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-simple-right" />
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-3">
    <div className="footer-item">
      <div className="footer-find">
        <h3>Find Us</h3>
        <ul>
          <li>
            <i className="icofont-location-pin" />
            28/A Street, New York City
          </li>
          <li>
            <i className="icofont-ui-call" />
            <a href="tel:+880123456789">+88 0123 456 789</a>
          </li>
          <li>
            <i className="icofont-ui-email" />
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#85ede0e9e9eac5e2e4e7e9e0abe6eae8">
              <span
                className="__cf_email__"
                data-cfemail="eb838e878784ab8c8a89878ec5888486"
              >
                [email&nbsp;protected]
              </span>
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
            Copyright © Rishi Jobs. Designed By
            <a href="www.impressbss.com" target="_blank">
              IBSS
            </a>
          </p>
        </div>
      </div>
      {/* <div class="col-lg-6">
                      <div class="copyright-item copyright-right">
                          <ul>
                              <li>
                                  <a href="terms-and-conditions.php"
                                      target="_blank">Terms & Conditions</a>
                              </li>
                              <li>
                                  <span>-</span>
                              </li>
                              <li>
                                  <a href="privacy-policy.php"
                                      target="_blank">Privacy Policy</a>
                              </li>
                          </ul>
                      </div>
                  </div> */}
    </div>
  </div>
</div>

      </div>


    </>

  )
}

export default Footer;
