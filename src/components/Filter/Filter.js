import React from "react";

export default function Filter({ onChange, value }) {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
}
