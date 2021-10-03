import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar';
import {Link, Router} from "react-router-dom";
import TermsandConditions from './TermsandCondition';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import CallUs from './CallUs';
import Email from './Email';
import Youtube from './Youtube';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Insta from './Insta';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';





export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        
        <Paper elevation={0}>
              Policies
            </Paper>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicy/>
            <HyperlinkingPolicies/>
            <Help/>
            
            <Paper elevation={0}>
              Contact Us
            
              Goa Tourism Department
            
              Paryatan Bhavan, 2nd Floor, Patto
            
              Panaji-Goa, India 403001
            </Paper>
            <p>
            <CallUs/>
            </p>
            <p>
            <Email/>
            </p>
            
            <Grid container spacing={1}>

          <Grid item xl={3} xs={3}>
          <Youtube/>
          </Grid>
          
          
          <Grid item xl={3} xs={3}>
          <Twitter/>
          </Grid>
          <Grid item xl={3} xs={3}>
          <Facebook/>
          </Grid>
          <Grid item xl={3} xs={3}>
          <Insta/>
          </Grid>
          </Grid>
          

            
          <Paper elevation={0}>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </Paper>
         

        </div>
      </footer>

    </div>
  );
}