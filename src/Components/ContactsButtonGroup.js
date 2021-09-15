import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>Director and Dy.Director of Tourism</Button>
        <Button>Assistant Director of Tourism</Button>
        <Button>Assistant Account Officer</Button>
        <Button>Assistant Tourism Officer</Button>
        <Button>Assistant Planning Officer</Button>
      </ButtonGroup>
     
    </div>
  );
}
