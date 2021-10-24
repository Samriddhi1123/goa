import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import rightarrow from '../Assets/rightarrow.svg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
  button: {
    borderRadius: 15,
    width: 250,
  }
}));

export default function OutlinedButton2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/EssentialContactList'}>
        <Button variant="outlined" color="primary" href="" className={classes.button}>
      <Grid container spacing={0}>
          <Grid item xl={12}>

          Essential Contacts List
          </Grid>
          </Grid>
          <img src={rightarrow} className="rightarrow" alt="arrow" />
        </Button>
      </Link>

    </div>
  );
}
