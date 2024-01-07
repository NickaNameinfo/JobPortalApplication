"use client";
import CompanyDashboardLayout from "@/app/CompanyDashboardLayout/page";
import * as React from "react";
import axios from "axios";
import Link from "next/link";
import { infoData } from "../../../configData";
import AdminDashboardLayout from "../AdminDashboardLayout/page";

const AdminDashboard = () => {
  const [company, setCompany] = React.useState(null);
  React.useEffect(() => {
    let companyId = sessionStorage.getItem("companyId");
    axios
      .get(`${infoData.baseApi}/company`)
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
    <AdminDashboardLayout>
      <div className="searched-jobs">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Email</th>
              <th>Compnay Number</th>
              <th>Company Website</th>
              <th>Company Address</th>
              <th>Total Employee</th>
            </tr>
          </thead>
          <tbody>
            {company?.map((result) => (
              <tr>
                <td>
                  <h5>
                    <b>{result?.companyName}</b>{" "}
                  </h5>
                </td>
                <td className="">
                  <p>{result?.companyEmail}</p>
                </td>
                <td>
                  <p>{result?.companyNumber}</p>
                </td>
                <td>
                  <p>{result?.companyWebsite}</p>
                </td>
                <td>
                  <p>{result?.companyAddress}</p>
                </td>
                <td>
                  <p>{result?.totalEmployee}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
