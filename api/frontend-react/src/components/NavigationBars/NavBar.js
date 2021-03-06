import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import Wimir from '../../assets/img/wimir.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={Wimir} alt='Wydział Inżynierii Mechanicznej i Robotyki' width="100" height="30" />  SYSTEM REZERWACJI
          </Typography>
          <RegisterModal />
          <LoginModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}