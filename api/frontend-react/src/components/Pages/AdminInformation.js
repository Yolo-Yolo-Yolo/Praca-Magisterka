import React, { Component } from "react";
import AdminInformations from './AdminInformations';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "./LoadingPage";
class AdminInformation extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { user, isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated&&user.isAdmin ? <AdminInformations /> : <Loading /> }
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(AdminInformation)
