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
import { connect } from "react-redux";
import { addReservationHours } from "../../actions/reservationhoursActions";
import PropTypes from "prop-types";
import pl from "date-fns/locale/pl";
import moment from 'moment-timezone';
import { nanoid } from 'nanoid'
import { Input } from "reactstrap";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkIcon from '@material-ui/icons/Link';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';

moment.tz('Europe/Warsaw');
registerLocale("pl", pl);

class ProdziekanAddingReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          minut: 5,
          do_kogo: "",
          godziny: [],
          Code: "",
          zgoda: false,
          TemporaryDate: setHours(setMinutes(new Date(), 0), 0),
          hours: { id : "", hour : "", isBooked : false, isConfirmed: false, Code: ""},
          Startdate: setHours(setMinutes(new Date(), 0), 0),
          Enddate: setHours(setMinutes(new Date(), 0), 0),
          StartdateFormatPL: setHours(setMinutes(new Date(), 0), 0),
          EnddateFormatPL: setHours(setMinutes(new Date(), 0), 0),
          StartdateFormatUS: setHours(setMinutes(new Date(), 0), 0),
          EnddateFormatUS: setHours(setMinutes(new Date(), 0), 0),
        }
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
      }

      static propTypes = {
        isAuthenticated: PropTypes.bool,
        auth: PropTypes.object.isRequired
      };

      componentDidMount() {
        const { user } = this.props.auth;
        this.setState({do_kogo : `${user.rola}`});
      }  

      handleChangeStartDate(Startdate) {
        this.setState({
          Startdate
        });
        const StartdateFormatPL = Startdate.toLocaleString('pl-PL');
        const StartdateFormatUS = Startdate.toLocaleString('en-US');
        //console.log(new Date(StartdateFormatPL).toISOString());
        this.setState({StartdateFormatPL});
        this.setState({StartdateFormatUS});
      }

      handleChangeEndDate(Enddate) {
        this.setState({
          Enddate
        });
        const EnddateFormatPL = Enddate.toLocaleString('pl-PL');
        const EnddateFormatUS = Enddate.toLocaleString('en-US');
        //console.log(EnddateFormatPL);
        this.setState({EnddateFormatPL});
        this.setState({EnddateFormatUS});
      }
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
      CheckboxChange = () => {
        this.setState({
          zgoda: !this.state.zgoda
        });
      };

      onSubmit = e => {
        e.preventDefault();
        ////////////////////////////////////////////////////
        // Code to create array of possible hours to book///
        ////////////////////////////////////////////////////
        const StartTime = new Date(this.state.StartdateFormatUS);
        const EndTime = new Date(this.state.EnddateFormatUS);

        const hoursObject = this.state.hours;
        hoursObject.Code = nanoid(12);
        const minut = this.state.minut;

        for (let i=0; StartTime.getTime()+i*(60000*minut) < EndTime.getTime() ; i++) {
            const TimeForLoop = StartTime;
            const time = TimeForLoop.getTime()+i*(60000*minut);
            let TimeForLoop2 = new Date(time);
            let TimeForLoopLocaleString = TimeForLoop2.toLocaleString('pl-PL');
            let TimeForLoopLocaleString2 = TimeForLoop2.toLocaleString('en-US');
            hoursObject.id = nanoid(6);
            hoursObject.hour = TimeForLoopLocaleString;
            hoursObject.hourUS = TimeForLoopLocaleString2;
            
            this.state.godziny.push({id: hoursObject.id, hour: hoursObject.hour, hourUS: hoursObject.hourUS, isBooked: hoursObject.isBooked, isConfirmed: false, Code: hoursObject.Code });
            //console.log("Liczba iteracji:"+ i );
        }
        
        //console.log(this.state.godziny);
        const newReservationHours = {
          do_kogo: this.state.do_kogo,
          Startdate: this.state.StartdateFormatUS,
          EndDate: this.state.EnddateFormatUS,
          StartdateFormatPL: this.state.StartdateFormatPL,
          EndDateFormatPL: this.state.EnddateFormatPL,
          godziny: this.state.godziny,
          Code: hoursObject.Code
        };
    
        //Add item via addItem action
        this.props.addReservationHours(newReservationHours);
        this.setState({godziny: []});
      };

    render() {
      
        return (
            <div style ={{color:"black"}}>
            <List subheader={
            <ListSubheader component="div" id="nested-list-subheader" style={{align:"left"}}>
            <strong>DODAJ NOWY DYŻUR DLA STUDENTÓW </strong>
            </ListSubheader>
             }>
                <Divider />
                <ListItem>
                <ListItemIcon><ScheduleIcon /></ListItemIcon>
                <ListItemText primary="Start dyżuru: " secondary={<DatePicker
                                dateFormat="dd/MM/yyyy H:mm"
                                name="StartDate"
                                selected={this.state.Startdate}
                                onChange={this.handleChangeStartDate}
                                showTimeSelect
                                timeIntervals={30}
                                locale='pl'
                            />} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><SnoozeIcon /></ListItemIcon>
                <ListItemText primary="Koniec dyżuru: "  secondary={<DatePicker
                                dateFormat="dd/MM/yyyy H:mm"
                                name="EndDate"
                                selected={this.state.Enddate}
                                onChange={this.handleChangeEndDate}
                                showTimeSelect
                                timeIntervals={30}
                                locale='pl'
                            />} />
                </ListItem>
                <Divider />
                <ListItem>
                <ListItemIcon><HourglassFullIcon /></ListItemIcon>
                <ListItemText primary="Co ile minut wejście: "  secondary={<Input
                  type="number"
                  name="minut"
                  id="minut"
                  placeholder="5"
                  onChange={this.onChange}
                ></Input>} />
                </ListItem>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" onClick={this.CheckboxChange} />}
                  label="Czy dyżur będzie zdalny ?"
                  labelPlacement="end"
                />
                {this.state.zgoda ? (
                <ListItem>
                <ListItemIcon><LinkIcon /></ListItemIcon><ListItemText primary="Link do spotkania: "  secondary={<Input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="http://www.linkdospotkania.pl"
                  onChange={this.onChange}
                ></Input>} />
                </ListItem>
              
            ) : null}
                
                
                <ListItemText primary="" secondary={<Button color="primary" onClick={this.onSubmit} variant="contained" style={{ marginLeft: "2rem" }} block="true">
                  Dodaj Nowy Dyżur
                </Button>} />
            </List>
            </div>   
        );
    }
}
const mapStatetoProps = state => ({
  auth: state.auth,
  reservationhours: state.reservationhours,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps, { addReservationHours })(ProdziekanAddingReservations);
