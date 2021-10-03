import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

export default function SimpleAccordion1() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <div className={classes.root}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Menino D’Souza </p>
            (Director of Tourism)</Typography>
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><p>Shri Rajesh Kale </p>
            Dy. Director of Tourism (Information/North Zone/South Zone)</Typography>
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><p>Shri Prasad Volvoikar </p>
            Dy. Director of Tourism
            (Administration/Revenue/Planning) Public Information Officer/ Public Grievances Officer (North)</Typography>
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><p>Smt. Sunita B. Singh </p>
            Dy. Director (Accounts)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> Address:2nd Floor, Paryatan Bhavan, Patto Plaza, Panaji-Tiswadi-Goa 403001
            </p>


            <Link href="#" onClick={preventDefault}>
              <p>0832 2494200</p>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>



    </div>
  );
}
