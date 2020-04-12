import React from 'react';
import loginActions from '../login/Login.actions';
import { history } from '../utils/_History';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  }
}));

function NavBar() {
  const classes = useStyles();

  function handleLogout(e) {
    e.preventDefault();
    loginActions.logout();
    history.replace('/');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Real estates
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
