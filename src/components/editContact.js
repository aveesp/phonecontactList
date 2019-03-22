import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class editContact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      id: "",
      name: "",
      email: "",
      company: "",
      phone: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  showEdit = contact => {
    console.log(contact);
    this.setState({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      company: contact.company,
      phone: contact.phone
    });
    this.handleShow();
  };

  handleSubmit = e => {
    e.preventDefault();
    let newContact = this.state;
    delete newContact.show;
    this.props.addContact(this.state);
    console.log(this.props);

    this.handleClose();
  };

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="John..."
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@xyz.com"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group controlId="company">
              <Form.Label>Company:</Form.Label>
              <Form.Control
                type="text"
                placeholder="xyz"
                name="company"
                value={this.state.company}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default editContact;
