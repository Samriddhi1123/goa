import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/ContactUsCard1';
import GoaMap from '../Assets/GoaMap.jpeg'
import OutlinedButton1 from '../Components/ContactUsButton1';
import OutlinedButton2 from '../Components/ContactUsButton2';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function ContactUs() {
  return (
    <React.Fragment>
        <Container fixed>
            
            
            <SimpleCard/>
            <img src = {GoaMap} className= "Goa-Tourism-Department" alt= "Goa-Tourism-Department"/>
            <OutlinedButton1/>
            <OutlinedButton2/>
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            <TwitterIcon/>
        </Container>
    </React.Fragment>
  );
}