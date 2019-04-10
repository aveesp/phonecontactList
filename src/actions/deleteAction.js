export const deleteContact = newContact => {
  return {
    type: "DELETE_CONTACT",
    newContact: newContact
  };
};
