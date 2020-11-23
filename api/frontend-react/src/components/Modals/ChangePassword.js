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
import { changepassword } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { clearSuccess } from "../../actions/successActions";
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class ChangePassword extends Component {
  state = {
    modal: false,
    id:"",
    oldpassword: "",
    newpassword: "",
    msg: null,
    msg2: null,
  };
  static propTypes = {
    error: PropTypes.object.isRequired,
    success: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    clearSuccess: PropTypes.func.isRequired,
    changepassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {

    const { error, success } = this.props;
    if (error !== prevProps.error) {
      //Check for change password error
      if (error.id === "CHANGE_PASSWORD_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (success !== prevProps.success) {
        //Check for change password success
        if (success.id === "CHANGE_PASSWORD_SUCCESS") {
          this.setState({ msg2: success.msg2.msg2 });
        } else {
          this.setState({ msg2: null });
        }
      }
  }
  toggle = () => {
    //Clear errors
    this.props.clearErrors();
    this.props.clearSuccess();
    this.setState({
      modal: !this.state.modal,
      msg2: null
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  reload = () => {
    window.location.reload(false)
    };
    
  onSubmit = e => {
    e.preventDefault();
    this.props.clearErrors();
    this.props.clearSuccess();
    const user2 = this.props.auth;
    const user = user2.user;
    console.log(user2);
    console.log(user);
    console.log(user._id);
    const change = {
        id: user._id,
        oldpassword: this.state.oldpassword,
        newpassword: this.state.newpassword
    }
    console.log(change);
    //Attempt to Change password
    this.props.changepassword(change);
       // this.toggle();
  };
  
  render() {
    //const { user } = this.props.auth;
    //console.log(user);
    return (
      <div>
        <ListItem button component="a" onClick={this.toggle}>
                    <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                    <ListItemText primary="Zmiana Hasła" />
                    </ListItem>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true}>
          <ModalHeader toggle={this.toggle} style={{color : "white", backgroundColor : "#3f51b5"}}>Zmiana Hasła</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            {this.state.msg2 ? (
              <Alert color="success">{this.state.msg2}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">Stare hasło:</Label>
                <Input
                  type="password"
                  name="oldpassword"
                  id="oldpassword"
                  placeholder="Stare hasło"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Nowe hasło:</Label>
                <Input
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  placeholder="Nowe hasło"
                  onChange={this.onChange}
                ></Input>
                <Button color="primary" onClick={this.onSubmit} variant="contained" style={{ marginTop: "2rem" }}>
                  Zmień hasło
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
  auth: state.auth,
  error: state.error,
  success: state.success
});

export default connect(mapStatetoProps, { changepassword, clearErrors, clearSuccess })(
  ChangePassword
);
