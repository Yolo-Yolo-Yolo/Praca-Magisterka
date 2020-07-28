import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card1 from "./Other/Card1";
import Card2 from "./Other/Card2";
import Card3 from "./Other/Card3";
import Card4 from "./Other/Card4";
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

class Footer extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
                    <Container maxWidth>
                        <Grid container spacing={3} style={{marginTop:"1rem"}}>
                        <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <Card1 />
                        </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper}>
                        <Card2 />
                        </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} style ={{marginBottom:"1rem"}}>
                        <Card3 />   
                        </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} style ={{marginBottom:"1rem"}}>
                        <Card4 />
                        </Paper>
                        </Grid>
                        </Grid>
                    </Container>
            </div>   
    );
  }
}



export default withStyles(styles)(Footer)
