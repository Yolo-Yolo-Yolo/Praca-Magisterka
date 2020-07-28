import React, { Component } from "react";
import Faq from './faq';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "./LoadingPage";
class AdminInformation extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated ? <Faq /> : <Loading /> }
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(AdminInformation)
