import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AllUsers from '../Other/AllUsers';
import AllUsersRoles from '../Other/AllUsersRoles';
import AllProdziekanReservationHours from '../Other/AllProdziekanReservationHours';
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


class AdminPanelBody extends Component {
    
    render() {
        const {classes} = this.props;

        return (
                <div className={classes.root}>
                    <Container maxWidth>
                        <Grid container spacing={3} style={{marginTop:"1rem"}}>
                            <Grid item xs={12}>
                            <Paper className={classes.paper} style={{marginBottom:"0rem", backgroundColor:"#757de8"}}>
                                        <AllUsers />
                            </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Paper className={classes.paper} style={{marginBottom:"1rem", backgroundColor:"#757de8"}}>
                                        <AllUsersRoles />
                            </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Paper className={classes.paper} style={{marginBottom:"1rem", backgroundColor:"#757de8"}}>
                                        <AllProdziekanReservationHours />
                            </Paper>
                            </Grid>
                        </Grid>
                    </Container>
            </div>   
        );
    }
}

export default withStyles(styles)(AdminPanelBody)
