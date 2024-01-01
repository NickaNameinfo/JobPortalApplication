"use client";
import * as React from "react";
import axios from "axios";
import TableList from "@/app/Components/Table/TableList";
import { infoData } from "../../../../configData";

const Users = () => {
  const [company, setCompany] = React.useState([]);
  const visibleColumn = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "userName",
  ];
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "First Name", uid: "firstName", sortable: true },
    { name: "Last Name", uid: "lastName", sortable: true },
    { name: "Email", uid: "email", sortable: true },
    { name: "Company Address", uid: "phoneNumber", sortable: true },
    { name: "User Name", uid: "userName" },
  ];

  const statusOptions = [
    { name: "Active", uid: "companyName" },
    { name: "Paused", uid: "companyWebsite" },
    { name: "Vacation", uid: "companyAddress" },
  ];

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = `${infoData.baseApi}/customers`;

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

export default Users;
