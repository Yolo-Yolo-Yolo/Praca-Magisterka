import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { addInformation } from "../../actions/InformationActions";
import PropTypes from "prop-types";

class InformationModal extends Component {
  state = {
    modal: false,
    title: "",
    info: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
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

  };
  render() {
    return (
      <div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" style={{color:"black"}}>Tytuł:</Label>
                <Input
                  type="text"
                  name="title"
                  id="item"
                  placeholder="Dodaj tytuł"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="item" style={{color:"black"}}>Treść ogłoszenia:</Label>
                <Input
                  type="textarea"
                  name="info"
                  id="item"
                  placeholder="Wpisz treść ogłoszenia"
                  onChange={this.onChange}
                ></Input>
                <Button color="primary" onClick={this.onSubmit} variant="contained" style={{ marginTop: "2rem" }} block>
                  Dodaj Ogłoszenie
                </Button>
              </FormGroup>
            </Form>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps, { addInformation })(InformationModal);
