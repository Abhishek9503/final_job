import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div className="flex flex-col gap-2">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="indore"
          title="Indore"
          name="test"
        />

<InputField
          handleChange={handleChange}
          value="banglore"
          title="Banglore"
          name="test"
        />


<InputField
          handleChange={handleChange}
          value="pune"
          title="Pune"
          name="test"
        />


<InputField
          handleChange={handleChange}
          value="hyderabad"
          title="Hyderabad"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
