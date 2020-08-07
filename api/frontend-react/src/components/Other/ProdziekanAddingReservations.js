import React, { Component } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import style from "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import SnoozeIcon from '@material-ui/icons/Snooze';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';

class ProdziekanAddingReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Startdate: setHours(setMinutes(new Date(), 0), 0),
          Enddate: setHours(setMinutes(new Date(), 0), 0)
        }
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
      }

      handleChangeStartDate(Startdate) {
        this.setState({
          Startdate
        });
      }

      handleChangeEndDate(Enddate) {
        this.setState({
          Enddate
        });
      }
    render() {

        return (
            <div style ={{color:"black"}}>
            <List subheader={
            <ListSubheader component="div" id="nested-list-subheader" style={{align:"left"}}>
            <strong>DODAJ NOWY DYŻUR DLA STUDENTÓW</strong>
            </ListSubheader>
             }>
                <Divider />
                <ListItem>
                <ListItemIcon><ScheduleIcon /></ListItemIcon>
                <ListItemText primary="Start dyżuru: " secondary={<DatePicker
                                dateFormat="dd/MM/yyyy H:mm"
                                selected={this.state.Startdate}
                                onChange={this.handleChangeStartDate}
                                showTimeSelect
                                timeIntervals={30}
                            />} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><SnoozeIcon /></ListItemIcon>
                <ListItemText primary="Koniec dyżuru: "  secondary={<DatePicker
                                dateFormat="dd/MM/yyyy H:mm"
                                selected={this.state.Enddate}
                                onChange={this.handleChangeEndDate}
                                showTimeSelect
                                timeIntervals={30}
                            />} />
                </ListItem>
                <Divider />
                <ListItem>
                
                <ListItemText primary="" secondary={<Button color="primary" variant="contained" style={{ marginLeft: "3.5rem" }} block="true">
                  Dodaj Nowy Dyżur
                </Button>} />
                </ListItem>
            </List>
            </div>   
        );
    }
}

export default (ProdziekanAddingReservations);
