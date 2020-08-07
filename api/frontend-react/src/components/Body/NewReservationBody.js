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
        console.log(setHours(setMinutes(new Date('2020','08','44'), 0), 18));
      }
    render() {
        const {classes} = this.props;

        return (
                <div className={classes.root}>
                    <Container maxWidth>
                        <Grid container spacing={3} style={{marginTop:"1rem"}}>
                            <Grid item xs={6}>
                            <Paper className={classes.paper}><h1 align="center" style={{color:"black"}}>
                                        TEST
                                    </h1></Paper>
                            </Grid>
                            <Grid item xs={6}>
                            <Paper className={classes.paper}><h1 align="center" style={{color:"black"}}>
                                        TEST
                                    </h1></Paper>
                            </Grid>
                            <Grid item xs={12}>
                            
                            <DatePicker
                                dateFormat="dd/MM/yyyy H:mm"
                                selected={this.state.date}
                                includeDates={[new Date().getFullYear, addDays(new Date(), 7), addDays(new Date(), -3)]}
                                onChange={this.handleChange}
                                showTimeSelect
                                minTime={setHours(setMinutes(new Date('2020','08','04'), 0), 17)}
                                maxTime={setHours(setMinutes(new Date('2020','08','04'), 30), 18)}
                                timeIntervals={5}
                                excludeTimes={[
                                    setHours(setMinutes(new Date('2020','08','04'), 5), 17),
                                    setHours(setMinutes(new Date('2020','08','04'), 10), 18)
                                ]}
                            />
                            </Grid>
                        </Grid>
                    </Container>
            </div>   
        );
    }
}

export default withStyles(styles)(NewReservationBody)
