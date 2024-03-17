import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
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
          value={30}
          title="< 30,000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={50}
          title="< 80,000k"
          name="test2"
        />

<InputField
          handleChange={handleChange}
          value={80}
          title="< 50,000k"
          name="test2"
        />
      </div>
    </>
  );
};

export default Salary;
