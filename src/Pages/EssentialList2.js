import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable2 from '../Components/TableList2';


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
            
            <BasicTable2/>
        </Container>
    </React.Fragment>
  );
}