import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DatePicker, { registerLocale } from "react-datepicker";
import style from "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { addDays } from 'date-fns';
import ReservationTabs from './../Other/ReservationTabs';
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


class NewReservationBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(date) {
        this.setState({
          date
        });
      }
    render() {
        const {classes} = this.props;

        return (
                <div className={classes.root}>
                    <Container maxWidth>
                        <Grid container spacing={3} style={{marginTop:"1rem", marginBottom:"1rem"}}>
                            <Grid item xs={12}>
                            <Paper className={classes.paper}>
                              <ReservationTabs />
                            </Paper>
                            </Grid>
                        </Grid>
                    </Container>
            </div>   
        );
    }
}

export default withStyles(styles)(NewReservationBody)
