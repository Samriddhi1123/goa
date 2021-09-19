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



export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <p>
              Policies
            </p>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicy/>
            <HyperlinkingPolicies/>
            <Help/>
            
            <p>
              Contact Us
            </p>
            <p>
              Goa Tourism Department
            </p>
            <p>
              Paryatan Bhavan, 2nd Floor, Patto
            </p>
            <p>
              Panaji-Goa, India 403001
            </p>
            <p>
            <CallUs/>
            </p>
            <p>
            <Email/>
            </p>
            <Youtube/>
            <Twitter/>
            <Facebook/>
            <Insta/>
            <p>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </p>
         

        </div>
      </footer>

    </div>
  );
}