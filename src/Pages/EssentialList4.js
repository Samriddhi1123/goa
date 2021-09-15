import React from 'react';
import Container from '@material-ui/core/Container'; 
import BasicTable4 from '../Components/TableList4';


export default function EssentialList4() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            
            <BasicTable4/>
        </Container>
    </React.Fragment>
  );
}