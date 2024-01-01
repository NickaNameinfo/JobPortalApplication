"use client";
import * as React from "react";
import axios from "axios";
import { Button, Link } from "@nextui-org/react";
import TableList from "@/app/Components/Table/TableList";
import { infoData } from "../../../../configData";

export default function Company() {
  const [company, setCompany] = React.useState([]);
  const visibleColumn = [
    "companyName",
    "companyWebsite",
    "companyAddress",
    "totalEmployee",
    "userName",
    "passowrd",
  ];
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Company Name", uid: "companyName", sortable: true },
    { name: "Company Website", uid: "companyWebsite", sortable: true },
    { name: "Company Address", uid: "companyAddress", sortable: true },
    { name: "User Name", uid: "userName" },
  ];

  const statusOptions = [
    { name: "Active", uid: "companyName" },
    { name: "Paused", uid: "companyWebsite" },
    { name: "Vacation", uid: "companyAddress" },
  ];

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = `${infoData.baseApi}/company`;

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
    <>
      <div>
        {/* <Button
          size="sm"
          variant="flat"
          className="mb-4"
          as={Link}
          href="/Pages/AddCompany"
        >
          Add Compay
        </Button> */}
      </div>
      <TableList
        data={company}
        visibleColumn={visibleColumn}
        columns={columns}
        option={statusOptions}
      />
    </>
  );
}
