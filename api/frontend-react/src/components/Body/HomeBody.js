import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AllInformationsUser from "../Other/AllInformationUser";
import UserInfo from "../Other/UserInfo";

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


class HomeBody extends Component {
    
    render() {
        const {classes} = this.props;

        return (
                <div className={classes.root}>
                    <Container maxWidth>
                        <Grid container spacing={3} style={{marginTop:"1rem"}}>
                        <Grid item xs={6}>
                        <Paper className={classes.paper}><h1 align="center" style={{color:"black"}}>
                                    PROFIL
                                </h1></Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={classes.paper}><h1 align="center" style={{color:"black"}}>
                                    OGŁOSZENIA
                                </h1></Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={classes.paper} style ={{marginBottom:"1rem"}}><UserInfo /></Paper>
                        </Grid>
                        <Grid item xs={6}>
                         <AllInformationsUser />
                        </Grid>
                        </Grid>
                    </Container>
            </div>   
        );
    }
}

export default withStyles(styles)(HomeBody)
