"use client";
import * as React from "react";
import axios from "axios";
import TableList from "@/app/Components/Table/TableList";
import { useSearchParams } from "next/navigation";
import { infoData } from "../../../../configData";

const Jobs = () => {
  const [company, setCompany] = React.useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("companyName");
  const visibleColumn = [
    "name",
    "phoneNumber",
    "email",
    "jobTitle",
    "jobLocation",
    "experience",
    "resume",
    "updates",
  ];
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Name", uid: "name", sortable: true },
    { name: "Number", uid: "phoneNumber", sortable: true },
    { name: "Email", uid: "email", sortable: true },
    { name: "Job Title", uid: "jobTitle", sortable: true },
    { name: "Location", uid: "jobLocation" },
    { name: "Experience", uid: "experience" },
    { name: "Resume", uid: "resume" },
    { name: "updates", uid: "updates" },
  ];

  const statusOptions = [
    { name: "Active", uid: "companyName" },
    { name: "Paused", uid: "companyWebsite" },
    { name: "Vacation", uid: "companyAddress" },
  ];

  React.useEffect(() => {
    // Define the API URL
    // Make a GET request using Axios
    axios
      .get(`${infoData.baseApi}/jobs`)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.companyName === search
        );
        setCompany(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <div>
      <TableList
        api={{
          api: `${infoData.baseApi}/jobs`,
        }}
        data={company}
        visibleColumn={visibleColumn}
        columns={columns}
        option={statusOptions}
      />
    </div>
  );
};

export default Jobs;
