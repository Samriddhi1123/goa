import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable1 from '../Components/TableList1';


export default function EssentialList2() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            
            <BasicTable1/>
        </Container>
    </React.Fragment>
  );
}