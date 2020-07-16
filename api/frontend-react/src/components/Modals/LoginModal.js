import React, { Component } from "react";
import {
    //Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import Button from '@material-ui/core/Button';

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    imie: "",
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for login error
      if (error.id === "LOGIN_FAIL") {
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
    
    const { email, password} = this.state;
    const user = {
        email,
        password
    }
    //Attempt to login
    this.props.login(user);
  };
  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.toggle}>LOGOWANIE</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} style={{color : "white", backgroundColor : "#3f51b5"}}>Logowanie</ModalHeader>
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
                <Button color="primary" onClick={this.onSubmit} variant="contained" style={{ marginTop: "2rem" }}>
                  Zaloguj
                </Button>
                <Button onClick={this.toggle} variant="contained" style={{color: "white", backgroundColor: "#ba000d", marginTop: "2rem", marginLeft: "1rem" }}>
                  Zamknij
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

export default connect(mapStatetoProps, { login, clearErrors })(
  LoginModal
);
