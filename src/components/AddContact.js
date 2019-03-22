import React, { Component } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import uuid from "uuid";

class AddContact extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: uuid.v4(),
      name: "",
      email: "",
      company: "",
      phone: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = e => {
    e.preventDefault();
    let newContact = this.state;
    delete newContact.show;
    this.props.addContact(this.state);
    console.log(this.props);

    this.handleClose();
  };

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  showEdit = contact => {
    console.log("addcontact");
    console.log(contact);
  };

  render() {
    return (
      <div className="AddContact">
        <Container>
          <Row>
            <Col sm="12">
              <Button
                variant="primary"
                className="mt-5 justify-content-end"
                onClick={this.handleShow}
              >
                Add Contact
              </Button>
            </Col>
          </Row>
        </Container>
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
                  // value={name}
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@xyz.com"
                  name="email"
                  // value={email}
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="company">
                <Form.Label>Company:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="xyz"
                  name="company"
                  // value={company}
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  // value={phone}
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: newContact => {
      dispatch({ type: "ADD_CONTACT", newContact });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);
