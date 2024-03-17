import React from "react";
import Button from "./Button";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <>
      <h4 className="text-lg font-medium mb-2"></h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
    </>
  );
};

export default Salary;
