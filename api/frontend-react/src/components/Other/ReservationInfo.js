import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "black",
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    });


class ReservationInfo extends Component {

    render() {
        const reservation = this.props.reservation
        const user = reservation.user;
        const {classes} = this.props;
        console.log(user);
        return (
            <div className={classes.root}>
                <div style ={{color:"black"}}>
                        <Grid container spacing={1} style={{marginTop:"0rem", marginBottom:"0rem"}}>
                            <Grid item xs={12}>
                                           
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                                <ListItemText primary="Kod Rezerwacji" secondary={reservation.id_terminu} />
                                </ListItem>
                                <Divider />
                                <ListItem style={{ backgroundColor:"#fafafa"}}>
                                <ListItemIcon><AssignmentLateIcon /></ListItemIcon>
                                <ListItemText primary="Temat"  secondary={reservation.temat} />
                                </ListItem>
                                <Divider />
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                                <ListItemText primary="Opis" secondary={reservation.opis} />
                                </ListItem>
                            </Grid>
                        </Grid>
            </div> 
            </div>     
        );
    }
}

export default withStyles(styles)(ReservationInfo)
