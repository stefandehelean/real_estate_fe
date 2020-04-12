import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {history} from "../../utils/_History";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    flexGrow: 1,
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
  }
}));

function Property({ property }) {
  const classes = useStyles();

  function handleCardClick(property) {
    history.push(`/details/${property._id}`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={4}>
        <CardActionArea className={classes.cardActionArea} onClick={() => handleCardClick(property)}>
          <Card className={classes.card}>
            <CardHeader
              title={property._id}
              subheader={`${property.type} (${property.city})`}
              titleTypographyProps={{
                component: "h6",
                variant: "p"
              }}
            />
            <CardMedia
              className={classes.cardMedia}
              image={property.images[1]}
              title={property.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {property.name}
              </Typography>
              <Typography>
                {property.description}
              </Typography>
              <Divider />
              <Typography align="right">
                {property.sold_price} {property.currency}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </React.Fragment>
  );
}

export default Property;
