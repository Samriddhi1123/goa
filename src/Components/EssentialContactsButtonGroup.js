import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
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
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList2'}>
          <Button>Assistant Director of Tourism
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList3'}>
          <Button>Assistant Account Officer
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList4'}>
          <Button>Assistant Tourism Officer
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>

        <Link to={process.env.PUBLIC_URL + '/EssentialList5'}>
          <Button>Assistant Planning Officer
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>

      </ButtonGroup>

    </div>
  );
}
