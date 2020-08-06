import React, { Component } from "react";
import ProdziekanReservation from './ProdziekanReservation';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";

class ProdziekanReservationPage extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { user, isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated&&user.role !== "Użytkownik" ? <ProdziekanReservation /> : <LoadingPage />}
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(ProdziekanReservationPage)
