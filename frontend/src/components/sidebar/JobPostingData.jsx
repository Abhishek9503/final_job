import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div className="flex flex-col gap-2">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value="all"
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="Today"
          title="Today"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="This Week"
          title="This Week"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="This Month"
          title="This Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
