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
    // let newConactList = [..., ];
    state.contactList.push(action.newContact);
    console.log(state.contactList);
  }
  return state;
};

export default rootReducer;
