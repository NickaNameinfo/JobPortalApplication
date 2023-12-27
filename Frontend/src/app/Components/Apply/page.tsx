import React from 'react'
import Header from '../Header'
import Footer from '../Footer/page'

const Apply = () => {
  return (
    <>
      <div>
        <Header />
       
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-text">
                  <h2>Apply Now</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li>Apply Now</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="create-account-area pt-50 pb-50">
          <div className="container">
            <div className="create-photo">
              <div className="already-create text-center"></div>
              <form>
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                    <div className="create-photo-item applyform text-center">
                      <h5 className="mb15">Add your contact information</h5>
                      {/* <p>Enter your Registered Mobile No.</p> */}
                      <div className="create-photo-right">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name Here"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Phone No"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Id"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Year of Experience"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="file"
                            className="form-control filee"
                            placeholder=""
                          />
                        </div>
                        <div className="text-right submitt">
                          <button type="submit" className="btn create-photo-btn">
                            <a href="#!">Apply Now</a>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>



  )
}

export default Apply
