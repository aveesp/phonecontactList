import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import { connect } from "react-redux";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>All Contacts</h1>
        <Contact />
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

export default connect(mapStateToProps)(App);
