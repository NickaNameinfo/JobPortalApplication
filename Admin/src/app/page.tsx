"use client";
import * as React from "react";
import TableList from "./Components/Table/TableList";
import axios from "axios";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  const [courses, setCourses] = React.useState([]);

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
      <TableList data={courses} />
    </>
  );
}
