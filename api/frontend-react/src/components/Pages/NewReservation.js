import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import SideBar from "../NavigationBars/SideBar";
import Copyright from "../Copyright";
import NewReservationBody from '../Body/NewReservationBody';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 12,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      backgroundColor: "#cfd8dc",
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    contentCopyright: {
      backgroundColor: "#fafafa",
      flexGrow: 1,
      padding: theme.spacing(0),
    },
  });


class NewReservation extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <SideBar />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <NewReservationBody />
                    <main className={classes.contentCopyright}>
                    <Copyright/>  
                    </main>
                </main>
            </div>
        );
    }
}
export default withStyles(styles)(NewReservation)