import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propertiesActions from '../Properties.actions';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      width: '100%'
    },
    '& .MuiSelect-root': {
      marginTop: '17px',
    },
    '& .MuiSelect-icon': {
      top: 'calc(50% - 2px)',
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    city: '',
    priceMax: ''
  });
  const { city, priceMax } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }
  function handleFilter(sendFilerData = true) {
    dispatch(propertiesActions.getAll(sendFilerData ? inputs : {}));
  }

  function handleReset() {
    setInputs({city: '', priceMax: '' });
    handleFilter(false);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <ExpansionPanel className={classes.filter}>
          <ExpansionPanelSummary
            expandIcon="+"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter Estates</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={2} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  name="city"
                  size="small"

                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>&nbsp;</em>
                  </MenuItem>
                  <MenuItem value={'Brasov'}>Brasov</MenuItem>
                  <MenuItem value={'Bucuresti'}>Bucuresti</MenuItem>
                  <MenuItem value={'Cluj-Napoca'}>Cluj-Napoca</MenuItem>
                  <MenuItem value={'Constanta'}>Constanta</MenuItem>
                  <MenuItem value={'Iasi'}>Iasi</MenuItem>
                  <MenuItem value={'Timisoara'}>Timisoara</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={2} >
                <TextField type="number" label="Max Price" name="priceMax" value={priceMax} inputProps={{step: 10000}} onChange={handleChange}/>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div className={classes.buttons}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleFilter}
                    className={classes.button}
                  >
                    Filter
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={handleReset}
                    className={classes.button}
                  >
                    Reset
                  </Button>
                </div>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </React.Fragment>
  );
}

export default Filter;
