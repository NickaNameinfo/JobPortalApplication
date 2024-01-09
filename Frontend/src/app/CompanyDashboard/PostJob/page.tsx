"use client";
import axios from "axios";
import React from "react";
import { infoData } from "../../../../configData";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import CompanyDashboardLayout from "@/app/CompanyDashboardLayout/page";

const PostJob = () => {
  const router = useRouter();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm({
    defaultValues: {
      jobType: "Full Time",
      jobTitle: "",
      salaryFrom: "",
      salaryTo: "",
      experince: "",
      jobLocation: "",
      jobdesCription: "",
    },
  });

  const onSubmit = async (formData) => {
    let companyId = sessionStorage.getItem("companyId");
    let companyName = sessionStorage.getItem("companyName");
    try {
      let tempData = {
        ...formData,
        companyName: companyName,
        companyId: companyId,
      };
      const response = await axios.post(
        `${infoData?.baseApi}/courses`,
        tempData
      );

      if (response.data.success && !response?.data?.data?.error) {
        router.push(`/CompanyDashboard/Jobs`);
      } else {
        alert("Somthing want worng or job alredy exist");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  return (
    <CompanyDashboardLayout>
      <div className="post-job-item">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="post-job-heading">
            <h2>Post Your Job</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Job Title</label>
                <Controller
                  name="jobTitle"
                  control={controlLogin}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input type="text" className="form-control" {...field} />
                  )}
                />
                <p className="error">
                  {errorsLogin.jobTitle?.type === "required"
                    ? "Field is required"
                    : null}
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="form-group">
                <label>Job Category</label>
                <div className="job-category-area">
                  <Controller
                    name="jobCategory"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        {...field}
                      >
                        <option value={"IT Technology"}>
                          IT &amp; Technology
                        </option>
                        <option value={"Web Developer"}>Web Developer</option>
                        <option value={"UX/UI Design"}>UX/UI Design</option>
                        <option value={"SEO"}>SEO</option>
                      </select>
                    )}
                  />
                  <p className="error">
                    {errorsLogin.jobCategory?.type === "required"
                      ? "Field is required"
                      : null}
                  </p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6">
              <div className="form-group">
                <label>Salary Form</label>
                <Controller
                  name="salaryFrom"
                  control={controlLogin}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <input type="text" className="form-control" {...field} />
                  )}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="job-currency-area">
                  <label>Salary To</label>
                  <Controller
                    name="salaryTo"
                    control={controlLogin}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <input type="text" className="form-control" {...field} />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Experince</label>
                <Controller
                  name="experince"
                  control={controlLogin}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <input type="text" className="form-control" {...field} />
                  )}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Location</label>
                <Controller
                  name="jobLocation"
                  control={controlLogin}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input type="text" className="form-control" {...field} />
                  )}
                />
                <p className="error">
                  {errorsLogin.jobLocation?.type === "required"
                    ? "Field is required"
                    : null}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mb-0">
                <label>Job Type</label>
                <div className="job-category-area">
                  <Controller
                    name="jobType"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <select
                        className="form-select mb-0"
                        aria-label="Default select example"
                        {...field}
                      >
                        <option value={"Full Time"}>Full Time</option>
                        <option value={"Part Time"}>Part Time</option>
                        <option value={"Intern"}>Intern</option>
                      </select>
                    )}
                  />

                  {errorsLogin.jobType?.type === "required" ? (
                    <p className="error">Field is required</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Job Description</label>
                <Controller
                  name="jobdesCription"
                  control={controlLogin}
                  render={({ field }) => (
                    <textarea
                      id="your_message"
                      rows={8}
                      className="form-control"
                      defaultValue={""}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn create-ac-btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </CompanyDashboardLayout>
  );
};

export default PostJob;
