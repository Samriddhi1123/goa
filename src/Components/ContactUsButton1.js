import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButton1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/PublicGrievancesOfficer'}>
        <Button variant="outlined" color="primary" href="">
          Details of Public Grievances Officer
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Link>





    </div>
  );
}
