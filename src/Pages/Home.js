import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button1';
import BasicButtonGroup from '../Components/BasicButtonGroup';
import Checkboxes from '../Components/BasicCheckBox';
import FloatingActionButtons from '../Components/ActionButton1';
import MaterialUIPickers from '../Components/DatePicker1';
import SimpleBottomNavigation from '../Components/BottomNavigation1';
import SimpleBreadcrumbs from '../Components/SimpleBreadCrumbs';
import RadioButtonsGroup from '../Components/RadioGroup';
import CustomizedRadios from '../Components/CutomisedRadio';
import ControlledAccordions from '../Components/ControlledAccordion';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            
            <ContainedButtons />
            <BasicButtonGroup />
            <Checkboxes />
            <FloatingActionButtons/>
            <MaterialUIPickers />
            <SimpleBottomNavigation />
            <SimpleBreadcrumbs />
            <RadioButtonsGroup />
            <CustomizedRadios />
            <ControlledAccordions />
        </Container>
    </React.Fragment>
  );
}