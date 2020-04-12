import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NavBar from '../navBar/NavBar';
import propertyDetailsActions from "./PropertyDetails.actions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, GridList, GridListTile, Paper } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import {history} from "../utils/_History";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "64px",
  },
  title: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  paper: {
    padding: '10px'
  }
}));

function PropertyDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const propertyData = useSelector(state => state.propertyDetails);
  const dispatch = useDispatch();

  const MapWithAMarker = withScriptjs(withGoogleMap(props => {
    const coordinates = propertyData.item.location.coordinates;

    return <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: coordinates[1], lng: coordinates[0]}}
      >
        <Marker
          position={{lat: coordinates[1], lng: coordinates[0]}}
        />
      </GoogleMap>
    }
  ));

  useEffect(() => {
    dispatch(propertyDetailsActions.getById(id));
  }, [dispatch]);

  function handleBack() {
    history.push(`/`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>

        <NavBar/>

        <main>

          <Container className={classes.cardGrid} maxWidth="lg">

              {propertyData && propertyData.item  && (
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Paper variant="outlined" square className={classes.paper}>
                      <Grid container spacing={4} justify="space-between" alignItems="center" className={classes.titleGrid}>
                        <Grid item xs={12} sm={12} md={6}>

                          <Typography component="h1" variant="h6">
                            {propertyData.item.name}
                          </Typography>
                          <Typography component="h1" variant="h5">
                            {`${propertyData.item.sold_price} ${propertyData.item.currency}`}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}>
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="default"
                            onClick={handleBack}
                            className={classes.backButton}
                          >
                            Back
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Paper variant="outlined" square className={classes.paper}>
                      <List className={classes.list}>
                        <ListItem>
                          <ListItemText primary="ID" secondary={id} />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Description" secondary={propertyData.item.description} />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Type" secondary={propertyData.item.type} />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <GridList className={classes.gridList} cols={3.5} rows={2}>
                      {propertyData.item.images.map((url, index) => (
                        <GridListTile key={index} rows={2}>
                          <img src={url} />
                        </GridListTile>
                      ))}
                    </GridList>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYu2zosULWlOYQij74195oaQyhwi3SoMA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                  </Grid>
                </Grid>
              )}

          </Container>

        </main>
      </div>
    </React.Fragment>
  );
}

export default PropertyDetails;
