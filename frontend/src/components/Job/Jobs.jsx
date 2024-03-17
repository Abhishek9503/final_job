// import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../../main";
import Cookies from "js-cookie";

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     try {
//       axios
//         .get("https://final-job.onrender.com/api/v1/job/getall", {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization:
//               Cookies.get("token") ||
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVlYjU0MWI5ZDA0YzlmZjk1NjQ3NiIsImlhdCI6MTcxMDY0NjcwMCwiZXhwIjo2ODk0NjQ2NzAwfQ.OuO7E3KJsVwOV6U19wJJOaaUqnJzvC8ysRsFpKAWDpI",
//           },
//         })
//         .then((res) => {
//           setJobs(res.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   if (!isAuthorized) {
//     navigateTo("/");
//   }

//   return (
//     <section className="jobs page">
//       <div className="container">
//         <h1 className="font-bold text-blue-500   te">ALL AVAILABLE JOBS</h1>
//         <div className="banner">
//           {jobs.jobs &&
//             jobs.jobs.map((element) => {
//               return (
//                 <div className="card" key={element._id}>
//                   <p>{element.title}</p>
//                   <p>{element.category}</p>
//                   <p>{element.country}</p>
//                   <Link to={`/job/${element._id}`}>Job Details</Link>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Jobs;

import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

import Card from "../components/Card";
// import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
// Assuming Card component is imported

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("jobs.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJobs(data);
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    try {
      axios
        .get("https://final-job.onrender.com/api/v1/job/getall", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization:
              Cookies.get("token") ||
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVlYjU0MWI5ZDA0YzlmZjk1NjQ3NiIsImlhdCI6MTcxMDY0NjcwMCwiZXhwIjo2ODk0NjQ2NzAwfQ.OuO7E3KJsVwOV6U19wJJOaaUqnJzvC8ysRsFpKAWDpI",
          },
        })
        .then((res) => {
          console.log(res.data, res.data.jobs);
          setJobs(res.data.jobs);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);

      const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

      const filteredItems =
        Array.isArray(jobs) && jobs.length > 0
          ? jobs.filter(
              (job) =>
                job.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
            )
          : [];
      console.log(filteredItems);

      const handleChange = (event) => {
        setSelectedCategory(event.target.value);
      };

      const handleCLick = (event) => {
        setSelectedCategory(event.target.value);
      };

      const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        if (query) {
          filteredJobs = filteredItems;
        }

        if (selected) {
          filteredJobs = filteredJobs.filter(
            ({
              location,
              salaryTo,
              // country
              // experienceLevel,
              // salaryType,
              // employmentType,
              // postingDate,
            }) =>
              location.toLowerCase() === selected.toLowerCase() ||
              parseInt(salaryTo) === parseInt(selected)
            // ||
            //  ||
            // country.toLowerCase() === country.toLowerCase()
            // employmentType.toLowerCase() === selected.toLowerCase()
          );
        }

        // Map over filteredJobs, not filteredData
        return Array.isArray(filteredJobs) && filteredJobs.length > 0 ? (
          filteredJobs.map((data, i) => <Card key={i} data={data} />)
        ) : (
          <></>
        );
      };

      const result = filteredData(jobs, selectedCategory, query);

      //funtion for pagination
    }
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleCLick={handleCLick} />
        </div>

        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p>Loading</p>
          ) : result.length > 0 ? (
            <div>{result}</div>
          ) : (
            <>
              <h3>{result.length}Jobs</h3>
              <h2>No Data found</h2>
            </>
          )}

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={(prevPage) => {
                  nextPage;
                }}
              >
                Previous
              </button>
              <span>
                Page{currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button onClick={(nextPage) => {}}>Next</button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Jobs;
