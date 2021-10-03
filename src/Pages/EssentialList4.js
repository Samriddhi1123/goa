import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion4 from '../Components/EssentialList4Accordion';
import Backbutton2 from '../Components/BackButtons/Backbutton2';
import { Paper } from '@material-ui/core';


export default function EssentialList4() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Assistant Tourism Officers
        </Paper>


        <SimpleAccordion4 />
        <Backbutton2 />
      </Container>
    </React.Fragment>
  );
}