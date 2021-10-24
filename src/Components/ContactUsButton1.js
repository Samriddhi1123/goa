import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import { Grid } from '@material-ui/core';
import rightarrow from '../Assets/rightarrow.svg';



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


export default function OutlinedButton1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/PublicGrievancesOfficer'}>
        <Button className={classes.button}
          variant="outlined" color="primary" href="" className={classes.button}>
          <Grid container spacing={1}>
              <Grid item xl={12}>
          Details of Public Grievances Officer
          </Grid>
          </Grid>
          <img src={rightarrow} className="rightarrow" alt="arrow" />
        </Button>
      </Link>





    </div>
  );
}
