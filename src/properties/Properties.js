import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propertiesActions from './Properties.actions';
import loginActions from '../login/Login.actions';
import { history } from '../utils/_History';
import NavBar from '../navBar/NavBar';
import Filter from './components/Filter';
import Property from './components/Property';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "64px",
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardActionArea: {
    maxWidth: 345,
  },
  card: {

    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardId: {
    fontSize: "12px"
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Properties() {
  const classes = useStyles();
  const propertiesData = useSelector(state => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertiesActions.getAll());
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>

        <NavBar/>

        <main>

          <Filter/>

          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {propertiesData && Object.keys(propertiesData).length > 0 && !propertiesData.loading && propertiesData.items.map((property) => (

                <Property property={property} key={property._id}/>

              ))}
            </Grid>
          </Container>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Properties;
