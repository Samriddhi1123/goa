import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
  button: {
    borderRadius: 15,
    width: 300,
  }
}));

export default function OutlinedButtons7() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button}>
      <Grid container spacing={1}>
          <Grid item xl={12}>
      Latest Announcements
      </Grid>
      </Grid>
      <ArrowForwardIosRoundedIcon/>
       </Button>
    </div>
  );
}