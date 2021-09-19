import React from 'react';
import Container from '@material-ui/core/Container'
import SwipeableTextMobileStepper from '../Components/Goahomepage/Stepper';
import TextMobileStepper from '../Components/Goahomepage/Stepper2';
import OutlinedButtons6 from '../Components/Goahomepage/Button6';
import OutlinedButtons7 from '../Components/Goahomepage/Button7';
import OutlinedButtons8 from '../Components/Goahomepage/Button8';
import GoaGovtLogo from '../Assets/GoaGovtLogo.jpg'
import DepartmentOfTourism from '../Assets/DepartmentOfTourism.jpeg'
import Video from '../Assets/Video.jpeg'



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        <img src = {GoaGovtLogo} className= "GoaGovtLogoo" alt= "Goa-Tourism-Department"/>
          <p>
            Department of Tourism Goa
            </p>
            <p>
            Government of Goa
            </p>
          <SwipeableTextMobileStepper/>
          <p>
            Welcome to Goa Tourism Department
            </p>
            <img src = {DepartmentOfTourism} className= "Goa-Tourism-Department" alt= "Goa-Tourism-Department"/>
          <p>
          The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
          The Current Director of Tourism is Shri Menino D’souza.
          The Public Grievances Officer is Dy. Director (Administration).
          The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </p>
          <p>
            Travel Essentials
            </p>
          <TextMobileStepper/>
          <OutlinedButtons6/>
          <OutlinedButtons7/>
          <OutlinedButtons8/>
          <p>
            A Glimpse into the Beauty of Goa
            </p>
            <img src = {Video} className= "Goa-Tourism-Department" alt= "Goa-Tourism-Department"/>
            
        </Container>
    </React.Fragment>
  );
}