import React from 'react'

export const PostJob = () => {
    return (
        <div>




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
                                        <h5>Post a Job</h5>
                                        {/* <p>We send your registered mobile number.</p> */}
                                        <div className="create-photo-right">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Job Title"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Number of people you wish to hire for this job"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Job Type"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Job Eligibilty"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Salary Amount"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <select name="" id="" className="form-control">
                                                            <option value={0}>Per Month</option>
                                                            <option value={1}>Per Year</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    cols={30}
                                                    rows={10}
                                                    className="form-control"
                                                    placeholder="Job Description"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="text-right submitt">
                                                <button type="submit" className="btn create-photo-btn">
                                                    <a href="postjob.php">Post</a>{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="text-left">
              <button type="submit" class="btn create-ac-btn">Save</button>
          </div> */}
                </div>
            </div>


        </div>
    )
}
