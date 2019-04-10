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
  componentWillMount() {
    // this.props.addContact();
    console.log(this.props.contactList);
  }

  handleClick = id => {
    this.props.deleteContact(id);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // console.log(this.props);
    // if (nextProps.newPost) {
    //   this.props.posts.unshift(nextProps.newPost);
    // }
  }
  render() {
    let { contactList } = this.props;
    console.log(contactList);
    const contcatList = this.props.contactList.length ? (
      this.props.contactList.map(contact => {
        return (
          <Card key={contact.id} className="mt-3">
            <Card.Body>
              <Row>
                <Col xs lg="2" className="text-left">
                  <strong>{contact.name}</strong>
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
                      onClick={() => this.props.editContact(contact)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="ml-2"
                      onClick={() => this.handleClick(contact.id)}
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
      <div>
        <h3>NO Contacts!</h3>
      </div>
    );
    return <Container className="contacts-list">{contcatList}</Container>;
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
      dispatch({ type: "DELETE_CONTACT", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
