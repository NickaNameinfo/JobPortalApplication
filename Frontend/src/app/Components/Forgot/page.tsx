import React from "react";
import Header from "../Header";
import Link from "next/link";

const Forgot = () => {
  return (
    <div>
      <div className="create-account-area login-area">
        <div className="container">
          <div className="create-photo">
            <div className="text-center mb-3">
              <img src="/Images/logo.png" alt="" width={150} />
              {/* <span>Already create an account?</span> */}
              <div>
                <Link href="/Components/Login">Sign In</Link>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Forgot Password?</h5>
                    <p>Enter your Registered Mobile No.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Phone No"
                        />
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          <Link href="/Components/ForgotOtp">Sent OTP</Link>{" "}
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
  );
};

export default Forgot;
