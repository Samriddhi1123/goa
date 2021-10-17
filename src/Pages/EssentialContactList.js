import React from 'react';
import Container from '@material-ui/core/Container';
import GroupOrientation from '../Components/EssentialContactsButtonGroup';
import Backbutton1 from '../Components/BackButtons/Backbutton1';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18
  }
}))


export default function EssentialContactList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0} className={classes.heading}>

          Essential Contact List
        </Paper>



        <GroupOrientation />
        <Grid container spacing={2}>
          <Grid item xs={12}>

        <Backbutton1 />
        </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}