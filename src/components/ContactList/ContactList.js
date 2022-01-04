import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ContactList({ data, onDelete, deleting }) {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {data.map(({ id, name, number }) => (
          <li key={id}>
            <p> {`${name}: ${number}`}</p>

            <button
              id={id}
              onClick={() => onDelete(id)}
              type="button"
              className="btn"
            >
              {deleting ? (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              ) : (
                "Delete"
              )}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
