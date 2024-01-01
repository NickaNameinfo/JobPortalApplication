import axios from "axios";
import Link from "next/link";
import React from "react";

const JobCard = ({ result, column }) => {
  const [jobList, setJobList] = React.useState(null);
  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/jobs";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        let localUserName = sessionStorage.getItem("userName");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.userName === localUserName
        );
        console.log(tempData, "response.data123412");

        setJobList(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className={`col-lg-${column} mix web ui`} key={result?.id}>
      <div className="job-item">
        <img src="/Images/home-1/jobs/1.png" alt="Job" />
        <div className="job-inner align-items-center">
          <div className="job-inner-left">
            <h3>
              <Link href="#">{result?.jobTitle}</Link>
            </h3>
            <Link className="company" href={`/Components/${result?.id}`}>
              {result?.companyName}
            </Link>
            <ul>
              <li>
                <i className="icofont-money-bag" />
                {result?.salaryFrom} - {result?.salaryTo}
              </li>
              <li>
                <i className="icofont-location-pin" />
                {result?.jobLocation}
              </li>
            </ul>
          </div>
          <div className="job-inner-right">
            <ul>
              <li>
                {jobList?.some(
                  (item) => item.jobTitle === result?.jobTitle
                ) ? (
                  <span style={{color : "black"}}>Applied</span>
                ) : (
                  <Link href={`/Components/Apply/${result?.id}`}>Apply</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
