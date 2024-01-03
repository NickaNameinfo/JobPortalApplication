"use client";
import axios from "axios";
import React from "react";
import { infoData } from "../../../configData";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const PostJob = () => {
  const router = useRouter();

  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const onSubmit = async (formData) => {
    let localUserName = sessionStorage.getItem("companyName");
    console.log(formData, "sdfasdfsad", localUserName);
    try {
      let tempData = {
        ...formData,
        companyName: localUserName,
      };
      const response = await axios.post(
        `${infoData?.baseApi}/courses`,
        tempData
      );

      if (response.data.success && !response?.data?.data?.error) {
        router.push(`/CompanyDashboard`);
      } else {
        alert("User name or password is incorrect");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  return (
    <div className="login-area">
      <div className="create-account-area pt-50 pb-50">
        <div className="container">
          <div className="create-photo">
            <div className="already-create text-center">
              <img src="/images/logo.png" alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Post a Job</h5>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <Controller
                          name="jobTitle"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Title"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.jobTitle?.type === "required"
                            ? "Frist is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="hireNumber"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Number of people you wish to hire for this job"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.hireNumber?.type === "required"
                            ? "Field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="jobType"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Type"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.jobType?.type === "required"
                            ? "Field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="jobEligibilty"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Eligibilty"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.jobEligibilty?.type === "required"
                            ? "Field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6">
                            <Controller
                              name="salaryAmount"
                              control={controlLogin}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Salary Amount"
                                  {...field}
                                />
                              )}
                            />
                            <p className="error">
                              {errorsLogin.salaryAmount?.type === "required"
                                ? "Field is required"
                                : null}
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <Controller
                              name="salaryType"
                              control={controlLogin}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <select className="form-control" {...field}>
                                  <option value={"Per Month"}>Per Month</option>
                                  <option value={"Per Year"}>Per Year</option>
                                </select>
                              )}
                            />
                            <p className="error">
                              {errorsLogin.salaryType?.type === "required"
                                ? "Field is required"
                                : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="jobdesCription"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <textarea
                              cols={30}
                              rows={10}
                              className="form-control"
                              placeholder="Job Description"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.jobdesCription?.type === "required"
                            ? "Field is required"
                            : null}
                        </p>
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          Post
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

export default PostJob;
