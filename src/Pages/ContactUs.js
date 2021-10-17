import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/ContactUsCard1';
import OutlinedButton1 from '../Components/ContactUsButton1';
import OutlinedButton2 from '../Components/ContactUsButton2';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18
  }
}))


export default function ContactUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>


        <SimpleCard />
        <Paper elevation={0} className={classes.heading}>

          Map
        </Paper>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.756105653988!2d73.83192521460136!3d15.497545689236317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08e645c34e5%3A0x9d7cc6cad5d04b57!2sDepartment%20Of%20Tourism%20-%20Goa!5e0!3m2!1sen!2sin!4v1632378791376!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>

        <Paper elevation={0} className={classes.heading}>

          Essential Contacts
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          </Grid>

          <OutlinedButton1 />

          <Grid item xs={12}>

            <OutlinedButton2 />
          </Grid>
        </Grid>
        <Paper elevation={0} className={classes.heading}>

          Visit Us Now
        </Paper>
        <FacebookIcon style={{ fontSize: 70, color:'#562085'}} />
        <InstagramIcon style={{ fontSize: 70, color:'#562085' }} />
        <YouTubeIcon style={{ fontSize: 70, color:'#562085'}} />
        <TwitterIcon style={{ fontSize: 70 , color:'#562085'}} />

      </Container>
    </React.Fragment>
  );
}