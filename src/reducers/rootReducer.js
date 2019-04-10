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
    let newConactList = [...state, state.contactList.push(action.newContact)];
    console.log(state.contactList);
    return newConactList;
  }
  if (action.type === "DELETE_CONTACT") {
    let newContact = state.contactList.filter(contact => {
      return action.id !== contact.id;
    });
    return {
      ...state,
      contactList: newContact
    };
  }
  if (action.type === "EDIT_CONTACT") {
    console.log(action);
    state.contactList.map((contact, index) => {
      if (action.contact.id === contact.id) {
      }
    });
  }
  return state;
};

export default rootReducer;
