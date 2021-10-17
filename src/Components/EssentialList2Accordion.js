import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion2() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
         
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Ganesh Teli </p>
            Assistant Director of Tourism
            (Revenue/Information)</Typography>
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
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><p>Shri Dhiraj Vagle </p>
            Assistant Director of Tourism/PIO (South)</Typography>
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

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><p>Shri Subhash Kavlekar </p>
            Assistant Director of Tourism/PIO(North)
            (Planning/NorthZone Office)</Typography>
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
