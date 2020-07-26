import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddInformation from '../Other/AddInformation';
import AllInformations from '../Other/AllInformations';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      paper2: {
        padding: theme.spacing(2),
        textAlign: 'Left',
        color: theme.palette.text.secondary,
      },
    });


class InformationBody extends Component {

    render() {
        const {classes} = this.props;

        return (
                <div className={classes.root}>
                    <Container maxWidth>      
                    <Grid container spacing={3} style={{marginTop : "1rem"}}>
                    <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h1 align="center" style={{color:"black"}}>
                                    OGŁOSZENIA
                                </h1>
                            </Paper>
                        </Grid>     
                        <Grid item xs={6}>
                            <Paper className={classes.paper} style ={{marginBottom:"1rem"}}>
                                <AddInformation />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                                <AllInformations />
                        </Grid>
                    </Grid>
                    </Container>
                </div>
        );
    }
}

export default withStyles(styles)(InformationBody)
