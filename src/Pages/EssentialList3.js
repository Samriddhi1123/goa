import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable3 from '../Components/TableList3';

export default function EssentialList3() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            
            <BasicTable3/>
        </Container>
    </React.Fragment>
  );
}