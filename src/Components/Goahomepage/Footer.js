import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar';
import { Link, Router } from "react-router-dom";
import TermsandConditions from './TermsandCondition';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import CallUs from './CallUs';
import Email from './Email';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Youtube from '../../Assets/Youtube.svg';
import Facebook from '../../Assets/Facebook.svg';
import Twitter from '../../Assets/Twitter.svg';
import Instagram from '../../Assets/Instagram.svg';
import Images from './Images';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#999999',
    fontSize: 20,
  },
  para: {
    backgroundColor: '#999999',
  }
}));



export default function AppFooter() {
  const classes = useStyles();

  return (
    <div className="root">

      <footer className="App-footer">
        <div className="flexbox-container">

          <Paper elevation={0} className={classes.header}>
            Policies
          </Paper>
          <TermsandConditions />
          <Disclaimer />
          <PrivacyPolicy />
          <HyperlinkingPolicies />
          <Help />

          <Link to={process.env.PUBLIC_URL+'/ContactUs'}>

          <Paper elevation={0}className={classes.header}>
            Contact Us
            </Paper>
            </Link>
            <Paper elevation={0} className={classes.para} >
            Goa Tourism Department

            Paryatan Bhavan, 2nd Floor, Patto

            Panaji-Goa, India 403001
            </Paper>
         
          <p>
            <CallUs />
          </p>
          <p>
            <Email />
          </p>

          <Grid container spacing={1}>

            <Grid item xl={3} xs={3}>
            <img src={Youtube} className="rightarrow" alt="arrow" />
            </Grid>


            <Grid item xl={3} xs={3}>
            <img src={Facebook} className="rightarrow" alt="arrow" />
            </Grid>
            <Grid item xl={3} xs={3}>
            <img src={Twitter} className="rightarrow" alt="arrow" />
            </Grid>
            <Grid item xl={3} xs={3}>
            <img src={Instagram} className="rightarrow" alt="arrow" />
            </Grid>
          </Grid>


          <Images/>
          <Paper elevation={0} className={classes.para}>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
          </Paper>

       
        </div>
      </footer>

    </div>
  );
}