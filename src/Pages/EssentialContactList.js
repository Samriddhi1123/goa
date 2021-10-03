import React from 'react';
import Container from '@material-ui/core/Container';
import GroupOrientation from '../Components/EssentialContactsButtonGroup';
import Backbutton1 from '../Components/BackButtons/Backbutton1';
import Paper from '@material-ui/core/Paper';


export default function EssentialContactList() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>

          Essential Contact List
        </Paper>



        <GroupOrientation />
        <Backbutton1 />
      </Container>
    </React.Fragment>
  );
}