// import React from 'react'

// const Card = ({data}) => {
//   return (
//     <div>
//     <h3>{data.title}</h3>
//     </div>
//   )
// }

// export default Card

import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    title,
    minPrice,
    salaryTo,
    salaryPrice,
    location,
    employmentType,
    postingDate,
    description,
  } = data;

  return (
    <section className="card mt-5 border shadow-lg	">
      <Link to={`/application/${_id}`} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div className="card-details">
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>

          <div className="text-primary/70 text-base flex flex-warp gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {location}{" "}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}{" "}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign />
              {minPrice}-{salaryTo}{" "}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postingDate}{" "}
            </span>
          </div>

          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
