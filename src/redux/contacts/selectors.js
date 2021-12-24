export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

export const getFilteredElems = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  // console.log("filter", filter);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
