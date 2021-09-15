import React from 'react';
import Container from '@material-ui/core/Container';
import CustomizedAccordions from '../Components/PublicOfficerAccordion';

export default function PublicGrievancesOfficer() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
               Details of Public Grievances Officer
            </p>
            
            
            <CustomizedAccordions/>
        </Container>

    </React.Fragment>
  );
}