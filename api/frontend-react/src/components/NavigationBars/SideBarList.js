import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';


class SideBarList extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
      };

    render() {
        const { user } = this.props.auth;
        const adminList = (
            <div>
            <Divider />
            <List subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            <strong>ADMIN</strong>
            </ListSubheader>
             }>
                <ListItem button component="a" href="/admin/panel">
                <ListItemIcon><SupervisorAccountRoundedIcon /></ListItemIcon>
                <ListItemText primary="Panel Admina" />
                </ListItem>
                <ListItem button component="a" href="/admin/rezerwacje">
                <ListItemIcon><EventSeatRoundedIcon /></ListItemIcon>
                <ListItemText primary="Wszystkie Rezerwacje" />
                </ListItem>
                <ListItem button component="a" href="/admin/ogloszenia">
                <ListItemIcon><AssignmentLateRoundedIcon /></ListItemIcon>
                <ListItemText primary="Ogłoszenia" />
                </ListItem>
            </List>
            <Divider />
            <List subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            <strong>ALL</strong>
            </ListSubheader>
             }>
                <ListItem button component="a" href="/home">
                <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                <ListItemText primary="Panel Główny" />
                </ListItem>
                <ListItem button component="a" href="/faq">
                <ListItemIcon><LiveHelpRoundedIcon /></ListItemIcon>
                <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem button component="a" href="/" onClick={this.props.logout}>
                <ListItemIcon><ExitToAppRoundedIcon /></ListItemIcon>
                <ListItemText primary="Wyloguj" />
                </ListItem>
            </List>
            </div>
        );

        const userList = (
            <div>
            <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>USER</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/rezerwacja">
                    <ListItemIcon><AddRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Nowa Rezerwacja" />
                    </ListItem>
                    <ListItem button component="a" href="/moje_rezerwacje">
                    <ListItemIcon><EventSeatRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Moje Wizyty" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>ALL</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/home">
                    <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Panel Główny" />
                    </ListItem>
                    <ListItem button component="a" href="/faq">
                    <ListItemIcon><LiveHelpRoundedIcon /></ListItemIcon>
                    <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button component="a" href="/" onClick={this.props.logout}>
                    <ListItemIcon><ExitToAppRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Wyloguj" />
                    </ListItem>
                </List>
                </div>
        )

        const ProdziekanList = (
            <div>
            <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>DEAN</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/prodziekan/moje_rezerwacje">
                    <ListItemIcon><EventSeatRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Rezerwacje" />
                    </ListItem>
                    <ListItem button component="a" href="/admin/ogloszenia">
                    <ListItemIcon><AssignmentLateRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Ogłoszenia" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>ALL</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/home">
                    <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Panel Główny" />
                    </ListItem>
                    <ListItem button component="a" href="/faq">
                    <ListItemIcon><LiveHelpRoundedIcon /></ListItemIcon>
                    <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button component="a" href="/" onClick={this.props.logout}>
                    <ListItemIcon><ExitToAppRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Wyloguj" />
                    </ListItem>
                </List>
                </div>
        )
        return (
            <div>
                 { user.isAdmin ? adminList : (user.rola !== "Użytkownik" ? ProdziekanList : userList)}
            </div>    
        );
    }
}


const mapStatetoProps = state => ({
    auth: state.auth
  });

export default connect(mapStatetoProps, { logout })(SideBarList)