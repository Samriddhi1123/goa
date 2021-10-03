import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion2 from '../Components/EssentialList2Accordion';
import Backbutton2 from '../Components/BackButtons/Backbutton2';
import Paper from '@material-ui/core/Paper';


export default function EssentialList2() {
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0}>
          Assistant Directors of Tourism
        </Paper>

        <SimpleAccordion2 />
        <Backbutton2 />
      </Container>
    </React.Fragment>
  );
}