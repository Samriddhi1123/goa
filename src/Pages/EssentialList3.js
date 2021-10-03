import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion3 from '../Components/EssentialList3Accordion';
import Backbutton2 from '../Components/BackButtons/Backbutton2';
import { Paper } from '@material-ui/core';

export default function EssentialList3() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Assistant Account Officers
        </Paper>


        <SimpleAccordion3 />
        <Backbutton2 />
      </Container>
    </React.Fragment>
  );
}