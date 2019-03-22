import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import { connect } from "react-redux";
import AddContact from "./components/AddContact";
import EditContact from "./components/editContact";

class App extends Component {
  onEdit = contact => {
    this._child.showEdit(contact);
  };

  render() {
    return (
      <div className="App">
        <h1>All Contacts</h1>
        <Contact contactList={this.props.contactList} onEdit={this.onEdit} />
        <AddContact />
        <EditContact
          ref={child => {
            this._child = child;
          }}
        />
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
