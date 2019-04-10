import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import { connect } from "react-redux";
import AddContact from "./components/AddContact";
import EditContact from "./components/editContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.editContact = React.createRef();
  }
  handleEdit = contact => {
    // console.log(contact);
    this.editContact.current.editDetails(contact);
  };

  onEdit = contact => {
    this.props.editContact(contact);
  };

  render() {
    return (
      <div className="App">
        <h1>All Contacts</h1>
        <Contact editContact={this.handleEdit} />
        <EditContact ref={this.editContact} onEdit={this.onEdit} />
        <AddContact />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: state.contactList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editContact: contact => {
      dispatch({ type: "EDIT_CONTACT", contact });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
