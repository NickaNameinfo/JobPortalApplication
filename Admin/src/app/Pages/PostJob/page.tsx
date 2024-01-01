"use client";
import React from "react";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { infoData } from "../../../../configData";
import axios from "axios";
const PostJob = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("companyName");
  const router = useRouter();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData, "sdfasdfsad");
    try {
      let tempData = {
        ...formData,
        companyName: search,
      };
      const response = await axios.post(
        `${infoData?.baseApi}/courses`,
        tempData
      );

      if (response.data.success && !response?.data?.data?.error) {
        router.push(`/?companyName=${search}`);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Controller
          name="jobTitle"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Job Title"
              {...field}
              errorMessage={
                errorsLogin.jobTitle?.type === "required"
                  ? "Job Title is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="jobCategory"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Job Category"
              {...field}
              errorMessage={
                errorsLogin.jobCategory?.type === "required"
                  ? "Job Category is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="salaryFrom"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Input type="text" label="Salary From" {...field} />
          )}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Controller
          name="salaryTo"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Input type="text" label="Salary To" {...field} />
          )}
        />
        <Controller
          name="jobLocation"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Job Location"
              {...field}
              errorMessage={
                errorsLogin.jobCategory?.type === "required"
                  ? "Job Location is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="experince"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="number"
              label="Experince"
              {...field}
              errorMessage={
                errorsLogin.experince?.type === "required"
                  ? "Experince Status is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="courseStatus"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Job Status"
              {...field}
              errorMessage={
                errorsLogin.courseStatus?.type === "required"
                  ? "Job Status is required"
                  : null
              }
            />
          )}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Controller
          name="jobdesCription"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Textarea label="Job Description" {...field} />
          )}
        />

        <Controller
          name="jobSkills"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Textarea label="Skills, and Abilities" {...field} />
          )}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Controller
          name="jobQualification"
          control={controlLogin}
          // rules={{ required: true }}
          render={({ field }) => (
            <Textarea label="Job Qualification" {...field} />
          )}
        />
      </div>

      <div className="text-right">
        <Button color="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PostJob;
