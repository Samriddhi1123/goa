import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          <Hidden mdUp>
        <Grid item md={12} xs={12}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        </Hidden>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>7</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
