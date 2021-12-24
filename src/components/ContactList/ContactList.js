import React from "react";
import { delContact } from "../../redux/contacts/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredElems } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredElems);

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ id, name, phoneNumber }) => (
          <li key={id}>
            <p> {`${name}: ${phoneNumber}`}</p>

            <button
              id={id}
              onClick={() => dispatch(delContact(id))}
              type="button"
              className="btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
