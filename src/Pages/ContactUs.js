import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/ContactUsCard1';
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


        <SimpleCard />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.756105653988!2d73.83192521460136!3d15.497545689236317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08e645c34e5%3A0x9d7cc6cad5d04b57!2sDepartment%20Of%20Tourism%20-%20Goa!5e0!3m2!1sen!2sin!4v1632378791376!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>
        <OutlinedButton1 />
        <OutlinedButton2 />
        <FacebookIcon style={{ fontSize: 70 }} />
        <InstagramIcon style={{ fontSize: 70 }} />
        <YouTubeIcon style={{ fontSize: 70 }} />
        <TwitterIcon style={{ fontSize: 70 }} />
      </Container>
    </React.Fragment>
  );
}