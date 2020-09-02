import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PropTypes from "prop-types";
import {getReservationInfo} from "../../actions/reservationActions";
import { connect } from "react-redux";

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


class ProdziekanReservationInfo extends Component {

    static propTypes = {
        reservations: PropTypes.object.isRequired,
      };

      componentDidMount() {
        this.props.getReservationInfo(this.props.reservation);
      };

    render() {
        const {classes} = this.props;
        const reservation = this.props.reservations;
        const rezerwacje = reservation.reservations;
        const user = rezerwacje.flatMap(({ user }) => user);
        return (
            <div className={classes.root}>
                <div style ={{color:"black"}}>
                {rezerwacje.map(({ id_terminu, temat, opis, album}) => (
                        <Grid container spacing={1} style={{marginTop:"0rem", marginBottom:"0rem"}}>
                            <Grid item xs={12}>
                                           
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><EmailIcon /></ListItemIcon>
                                <ListItemText primary="Kod Rezerwacji" secondary={id_terminu} />
                                </ListItem>
                                <Divider />
                                <ListItem style={{ backgroundColor:"#fafafa"}}>
                                <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
                                <ListItemText primary="Temat"  secondary={temat} />
                                </ListItem>
                                <Divider />
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                                <ListItemText primary="Opis" secondary={opis} />
                                </ListItem>
                                <ListItem style={{ backgroundColor:"#fafafa"}}>
                                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                                <ListItemText primary="Album" secondary={album} />
                                </ListItem>
                            </Grid>
                        </Grid>
                ))}
                {user.map(({ email, imie, nazwisko, telefon }) => (
                        <Grid container spacing={1} style={{marginTop:"0rem", marginBottom:"0rem"}}>
                            <Grid item xs={12}>            
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><EmailIcon /></ListItemIcon>
                                <ListItemText primary="Email" secondary={email} />
                                </ListItem>
                                <ListItem style={{ backgroundColor:"#fafafa"}}>
                                <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
                                <ListItemText primary="Imię"  secondary={imie} />
                                </ListItem>
                                <Divider />
                                <ListItem style={{ backgroundColor:"#eceff1"}}>
                                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                                <ListItemText primary="Nazwisko" secondary={nazwisko} />
                                </ListItem>
                                <ListItem style={{ backgroundColor:"#fafafa"}}>
                                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                                <ListItemText primary="Telefon" secondary={telefon} />
                                </ListItem>
                            </Grid>
                        </Grid>
                ))}
            </div> 
            </div>     
        );
    }
}

const mapStatetoProps = state => ({
    reservations: state.reservations
  });

export default connect(mapStatetoProps, { getReservationInfo })(withStyles(styles)(ProdziekanReservationInfo))
