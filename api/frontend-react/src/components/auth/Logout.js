import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
//import { Button } from "reactstrap";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';


export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    return (
      <Fragment>
        <Button onClick={this.props.logout} href="/" style={{position: "absolute", color: "white", backgroundColor: "#ba000d", marginLeft: "95rem", marginRight: "20rem"}}>
          LOGOUT
        </Button>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
