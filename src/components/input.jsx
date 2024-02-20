import React from "react";

const Input = ({ handleSearchContact }) => {
  return (
    <input
      type="text"
      placeholder="Search by first name"
      onChange={(e) => handleSearchContact(e.target.value)}
    />
  );
};

export default Input;
