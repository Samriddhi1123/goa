import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion5 from '../Components/EssentialList5Accordion';
import Backbutton2 from '../Components/BackButtons/Backbutton2';
import { Paper } from '@material-ui/core';

export default function EssentialList5() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Assistant Planningv Officers
        </Paper>


        <SimpleAccordion5 />
        <Backbutton2 />
      </Container>
    </React.Fragment>
  );
}