import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction(
  "contact/add",
  ({ name, phoneNumber }) => ({
    payload: {
      id: uuidv4(),
      name,
      phoneNumber,
    },
  })
);
export const delContact = createAction("contact/del");
export const filterContact = createAction("filter/value");
