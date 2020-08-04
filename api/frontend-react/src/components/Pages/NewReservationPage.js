import React, { Component } from "react";
import NewReservation from './NewReservation';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";

class NewReservationPage extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated ? <NewReservation /> : <LoadingPage />}
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(NewReservationPage)
