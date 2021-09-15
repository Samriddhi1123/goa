import React from 'react';
import Container from '@material-ui/core/Container';
import GroupOrientation from '../Components/ContactsButtonGroup';


export default function EssentialContactList() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Essential Contact List
            </p>
            
            
            <GroupOrientation/>
        </Container>
    </React.Fragment>
  );
}