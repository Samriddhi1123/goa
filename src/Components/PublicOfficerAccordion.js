import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import arrowdown from '../Assets/arrowdown.svg';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      colour: 'black'
    },
  },
  arrows: {
    colour: 'red'
  }
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dy. Director of Tourism, Head Office, Panaji

          </Typography>
          <img src={arrowdown} className="arrow" alt="arrow" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> Dy. Director of Tourism, Head Office, Panaji </p>
            <p> Name: Prasad G. Volvoikar.</p>
            <p> Designation: Dy. Director of Tourism, Head Office, Panaji</p>
            <p> Address:  Department of Tourism, Government of Goa, Paryatan Bhavan, Patto, Panaji, Goa - 403001.</p>
            <p> Phone: 0832-2494223/9822762636</p>
            <p> Email ID: Prasad.volvoikar@gov.in </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Dy. Director/ Public Grievance Officer (North Zone Office/South Zone Office)

          </Typography>
          <img src={arrowdown} className="arrow" alt="arrow" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> Dy. Director of Tourism, Head Office, Panaji </p>
            <p> Name: Rajesh A. Kale.</p>
            <p> Designation: Dy. Director/ Public Grievance Officer (North Zone Office/South Zone Office).
            </p>
            <p> Address:  Department of Tourism, Government of Goa, Paryatan Bhavan, Patto, Panaji, Goa – 403001 (North Zone Office).
              Department of Tourism, Government of Goa, South Zone Office, Block No. 43, Ground Floor, Mathany Saldanha Administrative Complex, Margao, Goa - 403601. (South Zone Office)
            </p>
            <p> Phone:  0832-2494208 /0832-2794635
              /9822176918
            </p>
            <p> Email ID:  kalerajesh014@gmail.com
            </p>

          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
