import React from "react";
import { Input } from "@nextui-org/react";

export const ForgotPassword = () => {
  return (
    <>
      <Input
        classNames={{
          inputWrapper: ["border", "border-slate-100"],
          input: [
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        className="my-3"
        isClearable
        autoFocus
        label="Email Address Or Mobile Number"
        labelPlacement="outside"
        placeholder="Enter Your Email or Mobile Number"
        variant="bordered"
      />
    </>
  );
};
