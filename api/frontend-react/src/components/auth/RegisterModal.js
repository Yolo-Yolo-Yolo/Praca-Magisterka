import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class RegisterModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    album: "",
    imie: "",
    nazwisko: "",
    telefon: "",
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    // If authenticated, close modal
    if(this.state.modal) {
        if(isAuthenticated) {
            this.toggle();

        }
    }
  }

  toggle = () => {
    //Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, album, imie, nazwisko, telefon } = this.state;

    // Create user object
    const newUser = {
      email,
      password,
      album,
      imie,
      nazwisko,
      telefon
    };
    //Attempt to register
    this.props.register(newUser);
  };
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Rejestracja
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Rejestracja</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jankowalski@gmail.com"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Hasło:</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Hasło"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="album">Album:</Label>
                <Input
                  type="number"
                  name="album"
                  id="album"
                  placeholder="285288"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="imie">Imię:</Label>
                <Input
                  type="text"
                  name="imie"
                  id="imie"
                  placeholder="Jan"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="nazwisko">Nazwisko:</Label>
                <Input
                  type="text"
                  name="nazwisko"
                  id="nazwisko"
                  placeholder="Kowalski"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="telefon">Telefon:</Label>
                <Input
                  type="number"
                  name="telefon"
                  id="telefon"
                  placeholder="666555444"
                  onChange={this.onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Zarejestruj
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStatetoProps, { register, clearErrors })(
  RegisterModal
);
