import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

      position: 'relative',
      
      color:'black'
    },
  },
}));

export default function ContactUsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" m={1}>
      <Link to={process.env.PUBLIC_URL + '/ContactUs'}>
      <Button> Contact Us</Button>
      </Link>
      </Box>
    </div>
  );
}