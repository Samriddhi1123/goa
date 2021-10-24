import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import arrowdown from '../Assets/arrowdown.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading: {
    display: 'flex',
    alignItems: 'center'

  }

}));

export default function SimpleAccordion5() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary

          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p> Smt. Lodovina Quadros</p>
            Assistant Planning Officer</Typography>
            <img src={arrowdown} className="rightarrow" alt="arrow" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> Address:2nd Floor, Paryatan Bhavan, Patto Plaza, Panaji-Tiswadi-Goa 403001
            </p>
            <Link href="#" onClick={preventDefault}>


              <p> 0832 2494203</p>

            </Link>
            <Link href="#" onClick={preventDefault}>
              <p>0832 2494204</p>
            </Link>
            <Link href="#" onClick={preventDefault}>
              <p>0832 2494200</p>
            </Link>
          </Typography>

        </AccordionDetails>
      </Accordion>


    </div>
  );
}
