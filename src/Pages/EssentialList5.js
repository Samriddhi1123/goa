import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTable5 from '../Components/TableList5';

export default function EssentialList5() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            
            <BasicTable5/>
        </Container>
    </React.Fragment>
  );
}