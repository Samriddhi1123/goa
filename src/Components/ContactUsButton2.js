import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import rightarrow from '../Assets/rightarrow.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      colour: 'black'
    },
  },
  arrows: {
    colour: 'red'
  }
}));

export default function OutlinedButton2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Link to={process.env.PUBLIC_URL + '/EssentialContactList'}>
        <Button variant="outlined" color="primary" href="">

          Essential Contacts List
          <img src={rightarrow} className="rightarrow" alt="arrow" />
        </Button>
      </Link>

    </div>
  );
}
