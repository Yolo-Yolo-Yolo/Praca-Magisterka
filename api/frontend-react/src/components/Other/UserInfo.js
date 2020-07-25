import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SideBarList from "../NavigationBars/SideBarList";

class UserInfo extends Component {
    
    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                { user.isAdmin ? <SideBarList /> : <SideBarList />}
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStatetoProps, null)(UserInfo);
