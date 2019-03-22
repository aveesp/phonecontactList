const initState = {
  contactList: [
    {
      id: "db1v0hi28csoip4utdtga",
      name: "avees",
      company: "systesms+",
      email: "aveesp@gmail.com",
      phone: "9822311179"
    },
    {
      id: "9iazmhms1nlr2wj35otrbd",
      name: "Uzair",
      company: "Amdocs",
      email: "uzair@gmail.com",
      phone: "9845654567"
    },
    {
      id: "q2pyhdqqvyczd8v8u6tsd",
      name: "Usama",
      company: "Google",
      email: "usama@gmail.com",
      phone: "8055124531"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_CONTACT") {
    let contactList = [...state.contactList];

    contactList = [
      ...contactList.slice(0, contactList.length),
      action.newContact
    ];
    state.contactList = contactList;
    return state;
  }
  if (action.type === "DELETE_CONTACT") {
    let newContactList = state.contactList.filter(
      contact => action.id !== contact.id
    );
    return {
      ...state,
      contactList: newContactList
    };
  }
  if (action.type === "EDIT_CONTACT") {
    let contact = state.contactList.filter(contact => action.id === contact.id);
    console.log(contact);
  }
  return state;
};

export default rootReducer;
