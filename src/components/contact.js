import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  ButtonToolbar,
  Col,
  Container,
  Card,
  Button
} from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate = (newProps, nexState) => {
    console.log(newProps);
    console.log(nexState);
    return true;
  };

  handleDelete = id => {
    this.props.deleteContact(id);
  };

  handleEdit = contact => {
    this.props.onEdit(contact);
  };

  render() {
    const contactlist = this.props.contactList.length ? (
      this.props.contactList.map(contact => {
        return (
          <Card key={contact.id} className="mt-3">
            <Card.Body>
              <Row>
                <Col xs lg="2">
                  {contact.name}
                </Col>
                <Col xs lg="2">
                  {contact.company}
                </Col>
                <Col xs lg="3">
                  {contact.email}
                </Col>
                <Col xs lg="3">
                  {contact.phone}
                </Col>
                <Col xs lg="2">
                  <ButtonToolbar className="justify-content-center">
                    <Button
                      variant="info"
                      onClick={() => this.handleEdit(contact)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="ml-2"
                      onClick={() => this.handleDelete(contact.id)}
                    >
                      Delete
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })
    ) : (
      <div> NO Contacts! </div>
    );
    return <Container className="contacts-list">{contactlist}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    contactList: state.contactList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch({ type: "DELETE_CONTACT", id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
