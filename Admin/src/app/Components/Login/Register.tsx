import { Checkbox, Input, Link, Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

export const Register = () => {
  const [selected, setSelected] = React.useState("Customer");
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Input
            classNames={{
              inputWrapper: ["border", "border-slate-100"],
              input: [
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            isClearable
            autoFocus
            label="Name"
            labelPlacement="outside"
            placeholder="Enter Your Name"
            variant="bordered"
          />
          <Input
            classNames={{
              inputWrapper: ["border", "border-slate-100"],
              input: [
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            isClearable
            autoFocus
            label="Email Address"
            labelPlacement="outside"
            placeholder="Enter Your Email"
            variant="bordered"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            classNames={{
              inputWrapper: ["border", "border-slate-100"],
              input: [
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            isClearable
            autoFocus
            label="Mobile Number"
            labelPlacement="outside"
            placeholder="Enter Your Number"
            variant="bordered"
          />
          <Input
            classNames={{
              inputWrapper: ["border", "border-slate-100"],
              input: [
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            label="Password"
            labelPlacement="outside"
            placeholder="Enter Your Password"
            type="password"
            variant="bordered"
          />
        </div>
        <Checkbox
          className="pt-5"
          classNames={{
            label: "text-small",
          }}
        >
          Accept the all{" "}
          <span>
            <Link className="cursor-pointer" color="primary" size="sm">
              Terms & Conditions
            </Link>
          </span>
        </Checkbox>
      </div>
    </>
  );
};
