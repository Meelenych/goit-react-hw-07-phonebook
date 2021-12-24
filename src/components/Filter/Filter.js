import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/actions";
import { getFilter } from "../../redux/contacts/selectors";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={(e) => dispatch(filterContact(e.target.value))}
          value={value}
        />
      </label>
    </>
  );
}
