import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addInformation } from "../actions/InformationActions";

class InformationModal extends Component {
  state = {
    modal: false,
    title: "",
    info: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newInformation = {
      title: this.state.title,
      info: this.state.info
    };

    //Add item via addItem action
    this.props.addInformation(newInformation);

    // Close Modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Dodaj Ogłoszenie
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Dodawanie Ogłoszenia</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Tytuł:</Label>
                <Input
                  type="text"
                  name="title"
                  id="item"
                  placeholder="Dodaj tytuł"
                  onChange={this.onChange}
                ></Input>
                </FormGroup>
                <FormGroup>
                <Label for="item">Treść ogłoszenia:</Label>
                <Input
                  type="textarea"
                  name="info"
                  id="item"
                  placeholder="Wpisz treść ogłoszenia"
                  onChange={this.onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Dodaj
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  item: state.item
});

export default connect(mapStatetoProps, { addInformation })(InformationModal);
