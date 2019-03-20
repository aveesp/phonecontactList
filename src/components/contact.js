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
  render() {
    console.log(this.props.contactList);
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
                    <Button variant="info">Edit</Button>
                    <Button variant="danger" className="ml-2">
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

export default connect(mapStateToProps)(Contact);
