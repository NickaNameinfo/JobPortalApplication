import { Input } from "@nextui-org/react";
import React from "react";

export const NewPassword = () => {
  return (
    <>
      <Input
        classNames={{
          inputWrapper: ["border", "border-slate-100"],
          input: [
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        label="New Password"
        labelPlacement="outside"
        placeholder="Enter Your Password"
        type="password"
        variant="bordered"
      />
      <Input
        classNames={{
          inputWrapper: ["border", "border-slate-100"],
          input: [
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        className="mb-3"
        label="Confirm Password"
        labelPlacement="outside"
        placeholder="Enter Your Password"
        type="password"
        variant="bordered"
      />
    </>
  );
};
