import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleAccordion1 from '../Components/EssentialList1Accordion';
import Backbutton2 from '../Components/BackButtons/Backbutton2';
import Paper from '@material-ui/core/Paper';


export default function EssentialList2() {
  return (
    <React.Fragment>
      <Container fixed>

        <Paper elevation={0}>

          Director and Deputy Director Of Tourism
        </Paper>

        <SimpleAccordion1 />
        <Backbutton2 />
      </Container>
    </React.Fragment>
  );
}