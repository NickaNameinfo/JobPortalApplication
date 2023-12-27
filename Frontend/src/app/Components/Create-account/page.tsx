import React from 'react'
import Header from '../Header'

const CreateAccount = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className="create-account-area pt-50 pb-50">
        <div className="container">
          <div className="create-photo">
            <div className="already-create text-center">
              <img src="/Images/logo.png" alt="" />
              {/* <span>Already create an account?</span> */}
              {/* <a href="#">Sign In</a> */}
            </div>
            <form>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Ready to take the next step?</h5>
                    <p>Create an account or sign in.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name "
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter User Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Phone No"
                        />
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          <a href="otp.php">Sent OTP</a>{" "}
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

    </div>
  )
}

export default CreateAccount
