import React, { Component } from "react";
import Home from './Home';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";
class MainPage extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated ? <Home /> : <LoadingPage />}
            </div>
        );
    }
}
const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(MainPage)
