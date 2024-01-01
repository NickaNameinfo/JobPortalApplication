"use client";
import * as React from "react";
import TableList from "./Components/Table/TableList";
import axios from "axios";
import { Button, Link } from "@nextui-org/react";
import { Login } from "./Components/Login/Login";
import { useRouter, useSearchParams } from "next/navigation";
import { infoData } from "../../configData";

export default function Home() {
  const [courses, setCourses] = React.useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("companyName");

  console.log(search, "query23452345");
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
    "experince",
    "actions",
  ];
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Job Title", uid: "jobTitle", sortable: true },
    { name: "Experince", uid: "experince", sortable: true },
    { name: "Job Category", uid: "jobCategory", sortable: true },
    { name: "Salary From", uid: "salaryFrom", sortable: true },
    { name: "Slaary To", uid: "salaryTo" },
    { name: "Job Location", uid: "jobLocation" },
    { name: "Job Description", uid: "jobdesCription" },
    { name: "Job Skills", uid: "jobSkills" },
    { name: "Job Status", uid: "courseStatus" },
    { name: "Actions", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Active", uid: "jobTitle" },
    { name: "Paused", uid: "jobCategory" },
    { name: "Vacation", uid: "salaryFrom" },
  ];

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = `${infoData.baseApi}/courses`;

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.companyName === search
        );
        setCourses(tempData); // Assuming the response is an array of courses
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
          href={`/Pages/PostJob/?companyName=${search}`}
        >
          Add Jobs
        </Button>

        <TableList
          api={{
            api: `${infoData.baseApi}/courses`,
          }}
          data={courses}
          visibleColumn={visibleColumn}
          columns={columns}
          option={statusOptions}
        />
      </div>
    </>
  );
}
