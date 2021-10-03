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

export default function SimpleAccordion4() {
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
          <Typography className={classes.heading}><p> Shri Rodlin Mascarenhas</p>
            Assistant Tourist Officer (South)</Typography>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Gajanan Mahale</p>
            Assistant Tourist Officer-I (Revenue)</Typography>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Smt. Chitra Vengurlekar</p>
            Assistant Tourist Officer –I (North Zone)</Typography>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Pradeep Binnar</p>
            Assistant Tourist Officer (South)</Typography>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Jayesh Kankonkar</p>
            Assistant Tourist Officer (Information)</Typography>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><p>Shri Clifford D’Mello</p>
            Assistant Tourist Officer –II (North Zone)</Typography>
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
