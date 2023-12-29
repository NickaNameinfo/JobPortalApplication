"use client";
import * as React from "react";
import TableList from "./Components/Table/TableList";
import axios from "axios";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  const [courses, setCourses] = React.useState([]);
  const visibleColumn = [
    "jobTitle",
    "jobCategory",
    "salaryFrom",
    "salaryTo",
    "jobLocation",
    "status",
    "status",
    "jobdesCription",
    "jobSkills",
    "courseStatus",
  ];
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Job Title", uid: "jobTitle", sortable: true },
    { name: "Job Category", uid: "jobCategory", sortable: true },
    { name: "Salary From", uid: "salaryFrom", sortable: true },
    { name: "Slaary To", uid: "salaryTo" },
    { name: "Job Location", uid: "jobLocation" },
    { name: "Job Description", uid: "jobdesCription" },
    { name: "Job Skills", uid: "jobSkills" },
    { name: "Course Status", uid: "courseStatus" },
  ];

  const statusOptions = [
    { name: "Active", uid: "jobTitle" },
    { name: "Paused", uid: "jobCategory" },
    { name: "Vacation", uid: "salaryFrom" },
  ];

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/courses";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        setCourses(response?.data?.data?.data); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <>
      <div>
        <Button
          size="sm"
          variant="flat"
          className="mb-4"
          as={Link}
          href="/Pages/PostJob"
        >
          Add Jobs
        </Button>
      </div>
      <TableList
        data={courses}
        visibleColumn={visibleColumn}
        columns={columns}
        option={statusOptions}
      />
    </>
  );
}
