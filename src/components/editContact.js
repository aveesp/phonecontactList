import React, { Component } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";

class EditContact extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: "",
      company: "",
      name: "",
      email: "",
      phone: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  editDetails = contact => {
    this.setState({
      id: contact.id,
      name: contact.name,
      company: contact.company,
      email: contact.email,
      phone: contact.phone
    });

    this.handleShow();
  };

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  editCnt = contact => {
    this.setState({
      id: contact.id,
      company: contact.company,
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    });
    this.handleShow();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEdit(this.state);
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
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
                </Col>
                <Col>
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
                </Col>
              </Row>
              <Row>
                <Col>
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
                </Col>
                <Col>
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
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col sm={12}>
                  <Button
                    type="submit"
                    variant="primary"
                    className="justify-content-end"
                  >
                    Primary
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditContact;
