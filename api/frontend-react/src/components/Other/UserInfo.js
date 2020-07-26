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
import PersonIcon from '@material-ui/icons/Person';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CloseIcon from '@material-ui/icons/Close';
import Moment from 'react-moment';
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PhoneIcon from '@material-ui/icons/Phone';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ScheduleIcon from '@material-ui/icons/Schedule';


class UserInfo extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
      };

    render() {
        const { user } = this.props.auth;

        return (
            <div style ={{color:"black"}}>
            <List subheader={
            <ListSubheader component="div" id="nested-list-subheader" style={{align:"left"}}>
            <PersonIcon /><strong>DANE OSOBOWE</strong>
            </ListSubheader>
             }>
                <Divider />
                <ListItem>
                <ListItemIcon><EmailIcon /></ListItemIcon>
                <ListItemText primary="Email: " secondary={ user ? `${user.email}` : ' '} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
                <ListItemText primary="Imię: "  secondary={ user ? `${user.imie}` : ' '} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                <ListItemText primary="Nazwisko: " secondary={ user ? `${user.nazwisko}` : ' '} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><LabelImportantIcon /></ListItemIcon>
                <ListItemText primary="Nr Albumu: " secondary={ user ? `${user.album}` : ' '} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><PhoneIcon /></ListItemIcon>
                <ListItemText primary="Telefon: " secondary={ user ? `${user.telefon}` : ' '}  />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><ChildCareIcon /></ListItemIcon>
                <ListItemText primary={ user.isAdmin ? `Admin: ` : 'Admin: '} secondary={ user.isAdmin ? <DoneOutlineIcon style={{position:"relative"}} /> : <CloseIcon />} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><ScheduleIcon /></ListItemIcon>
                <ListItemText primary="Data utworzenia: " secondary={user ? (<Moment format="DD-MM-YYYY HH:mm">{user.date}</Moment>) : ' '} />
                </ListItem>
            </List>
            </div>    
        );
    }
}


const mapStatetoProps = state => ({
    auth: state.auth
  });

export default connect(mapStatetoProps, { logout })(UserInfo)
