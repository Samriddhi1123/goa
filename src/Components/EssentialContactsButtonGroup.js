import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
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
  },
  button: {
    margin: 5,
    border:5,
    },
    
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Link to={process.env.PUBLIC_URL + '/EssentialList1'}>
          <Button>Director and Dy.Director of Tourism
            <img src={rightarrow} className="rightarrow" alt="arrow" />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList2'}>
          <Button>Assistant Director of Tourism
            <img src={rightarrow} className="rightarrow" alt="arrow" />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList3'}>
          <Button>Assistant Account Officer
            <img src={rightarrow} className="rightarrow" alt="arrow" />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList4'}>
          <Button>Assistant Tourism Officer
            <img src={rightarrow} className="rightarrow" alt="arrow" />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList5'}>
          <Button className={classes.button}>Assistant Planning Officer
            <img src={rightarrow} className="rightarrow" alt="arrow" />
          </Button>
        </Link>

      </ButtonGroup>

    </div>
  );
}
