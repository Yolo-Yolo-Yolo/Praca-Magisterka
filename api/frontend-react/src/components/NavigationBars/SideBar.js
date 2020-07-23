import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

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
  LogoutButton: {
    marginRight: theme.spacing(2),
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
    flexGrow: 1,
    padding: theme.spacing(0),
  },
});

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        const {classes} = this.props;
        const handleDrawerOpen = () => {
            this.setState({open : true});
        };
        const handleDrawerClose = () => {
            this.setState({open : false});;
        };    
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="primary"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: this.state.open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6"  noWrap >
                    E-DZIEKANAT WIMIR
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {classes.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>ADMIN</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/admin/panel">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Panel Admina" />
                    </ListItem>
                    <ListItem button component="a" href="/admin/rezerwacje">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Wszystkie Rezerwacje" />
                    </ListItem>
                    <ListItem button component="a" href="/admin/ogloszenia">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Ogłoszenia" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>USER</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/rezerwacja">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Rezerwacja Wizyty" />
                    </ListItem>
                    <ListItem button component="a" href="/moje_rezerwacje">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Moje Wizyty" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                <strong>ALL</strong>
                </ListSubheader>
                 }>
                    <ListItem button component="a" href="/home">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Panel Główny" />
                    </ListItem>
                    <ListItem button component="a" href="/faq">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button component="a" href="/">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Wyloguj" />
                    </ListItem>
                </List>
                
            </Drawer> 
            </div> 
        );
    }
}
export default withStyles(styles)(SideBar)