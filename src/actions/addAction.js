export const addContact = newContact => {
  return {
    type: "ADD_CONTACT",
    newContact: newContact
  };
};
