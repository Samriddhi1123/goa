import React from 'react';
import Container from '@material-ui/core/Container';
import CustomizedAccordions from '../Components/PublicOfficerAccordion';
import Backbutton1 from '../Components/BackButtons/Backbutton1';


export default function PublicGrievancesOfficer() {
  return (
    <React.Fragment>
      
              
        <Container fixed>
            <p>
               Details of Public Grievances Officer
            </p>
            
            
            <CustomizedAccordions/>
            <Backbutton1/>
        </Container>

    </React.Fragment>
  );
}