"use client";
import * as React from "react";
import axios from "axios";
import TableList from "@/app/Components/Table/TableList";

const Jobs = () => {
  const [company, setCompany] = React.useState([]);
  const visibleColumn = [
    "name",
    "phoneNumber",
    "email",
    "jobTitle",
    "jobLocation",
    "experience",
    "resume",
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
  ];    

  const statusOptions = [
    { name: "Active", uid: "companyName" },
    { name: "Paused", uid: "companyWebsite" },
    { name: "Vacation", uid: "companyAddress" },
  ];

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/jobs";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        setCompany(response?.data?.data?.data); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <div>
      <TableList
        data={company}
        visibleColumn={visibleColumn}
        columns={columns}
        option={statusOptions}
      />
    </div>
  );
};

export default Jobs;
