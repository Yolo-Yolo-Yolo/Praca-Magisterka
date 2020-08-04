import React, { Component } from "react";
import AdminAllReservations from './AdminAllReservations';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";

class AdminAllReservationsPage extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated ? <AdminAllReservations /> : <LoadingPage />}
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(AdminAllReservationsPage)
