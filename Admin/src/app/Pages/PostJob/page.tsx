import React from "react";
import { Input, Button, Textarea } from "@nextui-org/react";

const PostJob = () => {
  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Input type="email" label="Job Title" />
        <Input type="email" label="Company Name" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Textarea label="Description"/>
        <Textarea label="Skills, and Abilities"/>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
        <Textarea label="Qualification"/>
      </div>

      <div className="text-right">
        <Button color="primary" className="mt-3">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PostJob;
