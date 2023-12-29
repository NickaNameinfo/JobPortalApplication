"use client";
import React from "react";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { infoData } from "../../../../configData";
import axios from "axios";
const AddCompany = () => {
  const router = useRouter();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData, "sdfasdfsad");
    try {
      const response = await axios.post(
        `${infoData?.baseApi}/company`,
        formData
      );
      if (response.data.success && !response?.data?.data?.error) {
        router.push("/Pages/Company");
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
          name="companyName"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Company Name"
              {...field}
              errorMessage={
                errorsLogin.companyName?.type === "required"
                  ? "Job Name is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="companyWebsite"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Company Website"
              {...field}
              errorMessage={
                errorsLogin.companyWebsite?.type === "required"
                  ? "Company Website is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="totalEmployee"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Total Employee"
              {...field}
              errorMessage={
                errorsLogin.totalEmployee?.type === "required"
                  ? "Total Employee is required"
                  : null
              }
            />
          )}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Controller
          name="companyAddress"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Company Address"
              {...field}
              errorMessage={
                errorsLogin.companyAddress?.type === "required"
                  ? "Company Address is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="userName"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="User Name"
              {...field}
              errorMessage={
                errorsLogin.userName?.type === "required"
                  ? "User Name is required"
                  : null
              }
            />
          )}
        />
        <Controller
          name="passowrd"
          control={controlLogin}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              label="Password"
              {...field}
              errorMessage={
                errorsLogin.passowrd?.type === "required"
                  ? "Password is required"
                  : null
              }
            />
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

export default AddCompany;
